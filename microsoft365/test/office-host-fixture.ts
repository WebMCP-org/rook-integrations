import { vi } from "vitest";

// Only the external Office host is substituted. The provider module, input
// validation, native-operation composition and returned results are real.
export const documentUrl = "https://example.sharepoint.com/Shared%20Documents/RookFixture";
export const oldSentence = "The launch is on Monday.";
export const newSentence = "The launch is on Tuesday.";
export const prefix = "Unicode café Δ 🍰 prefix. ";
export const suffix = " Evidence Alpha stays intact.";
export type NativeFont = Record<string, string | number | boolean | null>;
export const wordFont: NativeFont = {
  name: "Arial",
  size: 18,
  bold: true,
  italic: true,
  color: "#111111",
  underline: "None",
  strikeThrough: false,
  doubleStrikeThrough: false,
  highlightColor: "",
  subscript: false,
  superscript: false,
};
export const powerpointFont: NativeFont = {
  name: "Arial",
  size: 18,
  bold: true,
  italic: true,
  color: "#111111",
  underline: "Single",
  allCaps: true,
  doubleStrikethrough: false,
  smallCaps: false,
  strikethrough: true,
  subscript: false,
  superscript: true,
};
type Unit = { text: string; font: NativeFont; link: string };
type Command = { kind: string; apply(): void };
type Context = { commands: Command[]; sync(): Promise<void> };
type HostOptions = {
  requirements?: Record<string, string>;
  failReadAfterWrite?: boolean;
};
function noLoad() {}
function units(text: string, font: NativeFont = wordFont, link = ""): Unit[] {
  return text.split("").map((text) => ({ text, font: { ...font }, link }));
}
function supports(actual: string, requested: string) {
  const a = actual.split(".").map(Number),
    b = requested.split(".").map(Number);
  return (a[0] ?? 0) > (b[0] ?? 0) || ((a[0] ?? 0) === (b[0] ?? 0) && (a[1] ?? 0) >= (b[1] ?? 0));
}
function installOffice(
  host: string,
  options: HostOptions = {},
  image?: (input: unknown, options: Record<string, unknown>) => void,
) {
  vi.stubGlobal("Office", {
    HostType: { Word: "Word", Excel: "Excel", PowerPoint: "PowerPoint" },
    AsyncResultStatus: { Succeeded: "succeeded" },
    CoercionType: { Image: "Image" },
    onReady: async () => ({ host, platform: "OfficeOnline" }),
    context: {
      requirements: {
        isSetSupported: (set: string, version: string) =>
          supports(options.requirements?.[set] ?? "99.99", version),
      },
      document: {
        url: documentUrl,
        setSelectedDataAsync(
          input: unknown,
          settings: Record<string, unknown>,
          callback: (value: object) => void,
        ) {
          image?.(input, settings);
          callback({ status: "succeeded" });
        },
      },
    },
  });
}
function fontProxy(
  context: Context,
  getUnits: () => Unit[],
  extra?: (kind: string) => void,
  mixedUnderline: "Mixed" | null = "Mixed",
) {
  const snapshot = () => {
    const current = getUnits(),
      first = current[0]?.font ?? {};
    return Object.fromEntries(
      Object.keys(first).map((key) => [
        key,
        current.every((unit) => unit.font[key] === first[key])
          ? first[key]
          : key === "underline"
            ? mixedUnderline
            : null,
      ]),
    );
  };
  let loaded: string[] = [];
  const proxy: Record<string, unknown> = {
    load(fields: string) {
      loaded = fields.split(",");
    },
    toJSON: () => {
      const data = snapshot();
      return Object.fromEntries(loaded.map((key) => [key, data[key]]));
    },
    set(values: NativeFont) {
      context.commands.push({
        kind: "font",
        apply() {
          extra?.("font");
          for (const unit of getUnits()) Object.assign(unit.font, values);
        },
      });
    },
  };
  for (const key of [
    "name",
    "size",
    "bold",
    "italic",
    "color",
    "underline",
    "allCaps",
    "doubleStrikethrough",
    "smallCaps",
    "strikethrough",
    "subscript",
    "superscript",
  ])
    Object.defineProperty(proxy, key, {
      get: () => snapshot()[key],
      set: (value) =>
        context.commands.push({
          kind: "font",
          apply() {
            extra?.("font");
            for (const unit of getUnits()) unit.font[key] = value;
          },
        }),
    });
  return proxy;
}

export function wordHost(
  options: HostOptions & {
    targetLinks?: { start: number; end: number; url: string }[];
    targetFont?: NativeFont;
    existingPictures?: { width: number; height: number }[];
    ignorePictureSize?: boolean;
    loseLinkOnReadback?: boolean;
  } = {},
) {
  const state = {
    units: units(prefix, { ...wordFont, bold: false, size: 12 }).concat(
      units(oldSentence, options.targetFont ?? wordFont),
      units(suffix, { ...wordFont, bold: false, size: 12 }),
    ),
    pictures: structuredClone(options.existingPictures ?? []),
    writes: 0,
    replacements: 0,
    runs: 0,
  };
  for (const link of options.targetLinks ?? [])
    for (const unit of state.units.slice(prefix.length + link.start, prefix.length + link.end))
      unit.link = link.url;
  const snapshot = () => structuredClone(state);
  installOffice("Word", options);
  vi.stubGlobal("Word", {
    InsertLocation: { replace: "Replace", end: "End", before: "Before", after: "After" },
    RangeLocation: { end: "End" },
    async run(callback: (context: unknown) => Promise<unknown>) {
      state.runs++;
      const context: Context = {
        commands: [],
        async sync() {
          if (options.failReadAfterWrite && state.writes && !context.commands.length)
            throw Error("Independent native read unavailable");
          const commands = context.commands.splice(0);
          for (const command of commands) command.apply();
          if (commands.length) state.writes++;
        },
      };
      function range(start: number, end: number) {
        const current = () => state.units.slice(start, end);
        const result = {
          load: noLoad,
          get text() {
            return current()
              .map((unit) => unit.text)
              .join("");
          },
          get hyperlink() {
            return current().find((unit) => unit.link)?.link ?? "";
          },
          set hyperlink(value: string) {
            context.commands.push({
              kind: "link",
              apply() {
                for (const unit of current()) unit.link = value;
              },
            });
          },
          font: fontProxy(context, current),
          getHyperlinkRanges() {
            const groups: { start: number; end: number; url: string }[] = [];
            current().forEach((unit, index) => {
              const link = options.loseLinkOnReadback && state.writes ? "" : unit.link;
              if (!link) return;
              const previous = groups.at(-1);
              if (previous?.end === start + index && previous.url === link) previous.end++;
              else groups.push({ start: start + index, end: start + index + 1, url: link });
            });
            return { load: noLoad, items: groups.map((group) => range(group.start, group.end)) };
          },
          insertText(text: string, position: string) {
            const offset = position === "After" ? end : start;
            const changed = range(offset, offset + text.length);
            context.commands.push({
              kind: "text",
              apply() {
                state.replacements++;
                // Native insertion deliberately drops links and inherits adjacent
                // style. The client must restore, rather than trust text equality.
                const inherited = state.units[Math.max(0, offset - 1)]?.font ?? wordFont;
                state.units.splice(
                  offset,
                  position === "Replace" ? end - start : 0,
                  ...units(text, inherited),
                );
              },
            });
            return changed;
          },
          insertInlinePictureFromBase64(_bytes: string, position: string) {
            const picture = { width: 72, height: 72 };
            const proxy = {
              get width() {
                return picture.width;
              },
              set width(value: number) {
                if (!options.ignorePictureSize) picture.width = value;
              },
              get height() {
                return picture.height;
              },
              set height(value: number) {
                if (!options.ignorePictureSize) picture.height = value;
              },
            };
            context.commands.push({
              kind: "picture",
              apply() {
                state.pictures.splice(position === "End" ? state.pictures.length : 0, 0, picture);
              },
            });
            return proxy;
          },
        };
        return result;
      }
      const body = {
        load: noLoad,
        get text() {
          return state.units.map((unit) => unit.text).join("");
        },
        getHtml: () => ({ value: "<p>Synthetic native body</p>" }),
        search(text: string) {
          const all = state.units.map((unit) => unit.text).join(""),
            items = [];
          if (text)
            for (let at = all.indexOf(text); at >= 0; at = all.indexOf(text, at + text.length))
              items.push(range(at, at + text.length));
          return { load: noLoad, items };
        },
        getRange: () => range(state.units.length, state.units.length),
        get inlinePictures() {
          return { load: noLoad, items: state.pictures };
        },
      };
      return callback({ ...context, document: { body } });
    },
  });
  return { state, snapshot, text: () => state.units.map((unit) => unit.text).join("") };
}

export function excelHost(options: HostOptions & { ignoreActivation?: boolean } = {}) {
  const state = {
    activeId: "original",
    activations: 0,
    activeReads: 0,
    writes: 0,
    sheets: [
      { id: "original", name: "Existing evidence", position: 0, visibility: "Visible" },
      { id: "target", name: "Rook fixture", position: 1, visibility: "Visible" },
    ],
  };
  installOffice("Excel", options);
  vi.stubGlobal("Excel", {
    async run(callback: (context: unknown) => Promise<unknown>) {
      const context: Context = {
        commands: [],
        async sync() {
          const commands = context.commands.splice(0);
          commands.forEach((command) => command.apply());
          if (commands.length) state.writes++;
        },
      };
      function sheet(id: string) {
        const stored = state.sheets.find((item) => item.id === id);
        if (!stored) throw Error("Unknown worksheet");
        const proxy: Record<string, unknown> = {
          load: noLoad,
          activate() {
            context.commands.push({
              kind: "activate",
              apply() {
                state.activations++;
                if (!options.ignoreActivation) state.activeId = id;
              },
            });
          },
        };
        for (const field of ["id", "name", "position", "visibility"])
          Object.defineProperty(proxy, field, {
            get: () => Reflect.get(stored, field),
            set: (value) =>
              context.commands.push({
                kind: "sheet",
                apply() {
                  Reflect.set(stored, field, value);
                },
              }),
          });
        return proxy;
      }
      return callback({
        ...context,
        workbook: {
          worksheets: {
            load: noLoad,
            get items() {
              return state.sheets.map((item) => sheet(item.id));
            },
            getItem: sheet,
            getActiveWorksheet() {
              state.activeReads++;
              return sheet(state.activeId);
            },
          },
        },
      });
    },
  });
  return { state, snapshot: () => structuredClone(state.sheets) };
}

type Shape = {
  id: string;
  type: string;
  left: number;
  top: number;
  width: number;
  height: number;
  units: Unit[];
  hyperlinks: string[];
};
export function powerpointHost(
  options: HostOptions & {
    imageOnly?: boolean;
    staleText?: boolean;
    failFontRestore?: boolean;
    linked?: boolean;
    ignoreNewFont?: boolean;
    wrongImageGeometry?: boolean;
    ignoreSelection?: boolean;
    mixedUnderline?: boolean;
  } = {},
) {
  const primary: Shape = {
    id: "target",
    type: options.imageOnly ? "Image" : "TextBox",
    left: 20,
    top: 40,
    width: 320,
    height: 120,
    units: units(prefix + oldSentence + suffix, powerpointFont),
    hyperlinks: options.linked ? ["https://example.org/evidence"] : [],
  };
  if (options.mixedUnderline) primary.units[prefix.length]!.font.underline = "Double";
  const state = {
    shapes: [
      primary,
      {
        ...structuredClone(primary),
        id: "untouched",
        units: units("Keep this evidence", powerpointFont),
        hyperlinks: [],
      },
    ],
    runs: 0,
    writes: 0,
    textWrites: 0,
    textFrameReads: 0,
    selections: 0,
    selected: options.ignoreSelection ? "other-slide" : "slide",
    imageWrites: 0,
    fontRestoreAttempts: 0,
  };
  installOffice("PowerPoint", options, (_input, settings) => {
    state.imageWrites++;
    if (state.selected !== "slide") return;
    state.shapes.push({
      id: "inserted-image",
      type: "Image",
      left: Number(settings.imageLeft),
      top: Number(settings.imageTop),
      width: options.wrongImageGeometry ? 99 : Number(settings.imageWidth),
      height: Number(settings.imageHeight),
      units: [],
      hyperlinks: [],
    });
    state.writes++;
  });
  vi.stubGlobal("PowerPoint", {
    ShapeType: { image: "Image" },
    async run(callback: (context: unknown) => Promise<unknown>) {
      state.runs++;
      if (options.staleText && state.runs === 2)
        primary.units.unshift(...units("Collaborator edit: ", powerpointFont));
      const context: Context = {
        commands: [],
        async sync() {
          if (options.failReadAfterWrite && state.textWrites && !context.commands.length)
            throw Error("Independent native read unavailable");
          if (
            options.failFontRestore &&
            state.textWrites &&
            context.commands.some((command) => command.kind === "font")
          ) {
            state.fontRestoreAttempts++;
            throw Error("Native font restore failed");
          }
          const commands = context.commands.splice(0);
          for (const command of commands) command.apply();
          if (commands.some((command) => command.kind !== "selection")) state.writes++;
        },
      };
      function textRange(stored: Shape, start = 0, end?: number) {
        const current = () => stored.units.slice(start, end);
        const proxy = {
          load: noLoad,
          get text() {
            return current()
              .map((unit) => unit.text)
              .join("");
          },
          set text(value: string) {
            context.commands.push({
              kind: "text",
              apply() {
                stored.units.splice(
                  start,
                  (end ?? stored.units.length) - start,
                  ...units(value, { ...powerpointFont, bold: false, underline: "None" }),
                );
                state.textWrites++;
              },
            });
          },
          font: Object.assign(fontProxy(context, current, undefined, null), { toJSON: () => ({}) }),
          get hyperlinks() {
            return { load: noLoad, items: stored.hyperlinks.map((address) => ({ address })) };
          },
          getSubstring(offset: number, length: number) {
            return textRange(stored, start + offset, start + offset + length);
          },
        };
        return proxy;
      }
      const shapeCache = new Map<Shape, Record<string, unknown>>();
      function shape(stored: Shape) {
        const cached = shapeCache.get(stored);
        if (cached) return cached;
        const text = textRange(stored);
        const proxy: Record<string, unknown> = { load: noLoad };
        for (const field of ["id", "type", "left", "top", "width", "height"])
          Object.defineProperty(proxy, field, {
            get: () => Reflect.get(stored, field),
            set: (value) =>
              context.commands.push({
                kind: "geometry",
                apply() {
                  Reflect.set(stored, field, value);
                },
              }),
          });
        Object.defineProperty(proxy, "textFrame", {
          configurable: true,
          get() {
            state.textFrameReads++;
            if (stored.type === "Image") throw Error("InvalidArgument: image has no TextFrame");
            return { textRange: text };
          },
        });
        shapeCache.set(stored, proxy);
        return proxy;
      }
      const shapes = {
        load: noLoad,
        get items() {
          return state.shapes.map(shape);
        },
        getItem(id: string) {
          const item = state.shapes.find((item) => item.id === id);
          if (!item) throw Error("Unknown shape");
          return shape(item);
        },
        addTextBox(
          text: string,
          geometry: { left: number; top: number; width: number; height: number },
        ) {
          const added: Shape = {
            id: "added-text",
            type: "TextBox",
            ...geometry,
            units: units(text, { ...powerpointFont, bold: false, italic: false, size: 12 }),
            hyperlinks: [],
          };
          context.commands.push({
            kind: "add",
            apply() {
              state.shapes.push(added);
            },
          });
          const proxy = shape(added);
          if (options.ignoreNewFont)
            Object.defineProperty(proxy, "textFrame", {
              get: () => ({
                textRange: {
                  font: Object.fromEntries(
                    ["name", "size", "bold", "italic", "color"].map((key) => [key, undefined]),
                  ),
                },
              }),
            });
          return proxy;
        },
      };
      const slide = { id: "slide", shapes, load: noLoad };
      return callback({
        ...context,
        presentation: {
          slides: {
            load: noLoad,
            items: [slide],
            getItem(id: string) {
              if (id !== "slide") throw Error("Unknown slide");
              return slide;
            },
          },
          setSelectedSlides(ids: string[]) {
            context.commands.push({
              kind: "selection",
              apply() {
                if (!options.ignoreSelection) state.selected = ids[0] ?? "";
                state.selections++;
              },
            });
          },
          getSelectedSlides: () => ({
            load: noLoad,
            items: state.selected === "slide" ? [slide] : [],
          }),
        },
      });
    },
  });
  return {
    state,
    snapshot: () => structuredClone(state.shapes),
    text: () => primary.units.map((unit) => unit.text).join(""),
  };
}

// Queued Office-host fixture for readable table layout, independent of the
// provider's implementation. Dimensions deliberately differ across columns
// and rows; null is the native sentinel for a nonuniform range.
export function excelRangeHost(
  options: HostOptions & {
    failAutofitRows?: boolean;
    driftDimensionsOnReadback?: boolean;
    redistributeOnReadback?: boolean;
    quantizeDimensions?: boolean;
  } = {},
) {
  const state = {
    values: [
      ["Item", "Quantity", "Status", "Evidence / Notes"],
      ["Cake", 2, "Planned", "Unicode sentinel: café, Δ, 🍰."],
      ["Total", 2, "", "Formula must remain a formula."],
    ],
    formulas: [
      ["Item", "Quantity", "Status", "Evidence / Notes"],
      ["Cake", 2, "Planned", "Unicode sentinel: café, Δ, 🍰."],
      ["Total", "=SUM(B2:B2)", "", "Formula must remain a formula."],
    ],
    numberFormat: Array.from({ length: 3 }, () => ["General", "General", "General", "General"]),
    font: { name: "Arial", size: 12, bold: false, italic: false, color: "#111111" },
    format: {
      horizontalAlignment: "General",
      verticalAlignment: "Bottom",
      wrapText: false,
      fillColor: "#ffffff",
    },
    columns: [66, 66, 66, 66],
    rows: [18, 18, 18],
    validation: { address: "C2", values: ["Planned", "Completed"] },
    unrelated: { text: "Evidence outside the table", formula: "=42" },
    events: [] as string[],
    runs: 0,
    writes: 0,
  };
  installOffice("Excel", options);
  vi.stubGlobal("Excel", {
    async run(callback: (context: unknown) => Promise<unknown>) {
      state.runs++;
      const context: Context = {
        commands: [],
        async sync() {
          if (options.failReadAfterWrite && state.writes && !context.commands.length)
            throw Error("Independent native read unavailable");
          const commands = context.commands.splice(0);
          for (const command of commands) {
            state.events.push(command.kind);
            command.apply();
            state.writes++;
          }
        },
      };
      const enqueue = (kind: string, apply: () => void) => context.commands.push({ kind, apply });
      const nonuniform = (values: number[]) =>
        values.every((value) => value === values[0]) ? values[0] : null;
      const independent = state.runs > 2;
      const format: Record<string, unknown> = {
        load: noLoad,
        font: {
          load: noLoad,
          toJSON: () => ({ ...state.font }),
          set(value: object) {
            enqueue("font", () => Object.assign(state.font, value));
          },
        },
        fill: { load: noLoad },
        autofitColumns() {
          enqueue("autofitColumns", () => {
            state.columns = [72, 84, 108, 280];
          });
        },
        autofitRows() {
          enqueue("autofitRows", () => {
            if (options.failAutofitRows) throw Error("Native row fit failed");
            state.rows =
              state.format.wrapText && state.columns[3] >= 280 ? [24, 42, 30] : [18, 18, 18];
          });
        },
      };
      for (const key of ["horizontalAlignment", "verticalAlignment", "wrapText"])
        Object.defineProperty(format, key, {
          get: () => Reflect.get(state.format, key),
          set: (value) =>
            enqueue(key, () => {
              Reflect.set(state.format, key, value);
            }),
        });
      for (const [key, axis] of [
        ["columnWidth", "columns"],
        ["rowHeight", "rows"],
      ] as const)
        Object.defineProperty(format, key, {
          get: () => nonuniform(state[axis]),
          set: (value) =>
            enqueue(key, () => {
              state[axis] = state[axis].map(() =>
                options.quantizeDimensions ? Math.round(value / 0.75) * 0.75 : value,
              );
            }),
        });
      Object.defineProperty(format.fill, "color", {
        get: () => state.format.fillColor,
        set: (value) =>
          enqueue("fillColor", () => {
            state.format.fillColor = value;
          }),
      });
      const range = {
        load: noLoad,
        address: "Fixture!A1:D3",
        columnCount: 4,
        rowCount: 3,
        getColumn(index: number) {
          return {
            format: {
              load: noLoad,
              get columnWidth() {
                const shifted =
                  options.redistributeOnReadback && independent
                    ? [80, 90, 100, 274]
                    : state.columns;
                return shifted[index];
              },
            },
          };
        },
        getRow(index: number) {
          return {
            format: {
              load: noLoad,
              get rowHeight() {
                const shifted =
                  options.redistributeOnReadback && independent ? [30, 36, 30] : state.rows;
                return shifted[index];
              },
            },
          };
        },
        format,
        get width() {
          return (
            state.columns.reduce((sum, value) => sum + value, 0) +
            (options.driftDimensionsOnReadback && independent ? 20 : 0)
          );
        },
        get height() {
          return state.rows.reduce((sum, value) => sum + value, 0);
        },
        get values() {
          return structuredClone(state.values);
        },
        get formulas() {
          return structuredClone(state.formulas);
        },
        get numberFormat() {
          return structuredClone(state.numberFormat);
        },
        set numberFormat(value) {
          enqueue("numberFormat", () => {
            state.numberFormat = value;
          });
        },
      };
      return callback({
        ...context,
        workbook: {
          worksheets: {
            getItem(id: string) {
              if (id !== "target") throw Error("Wrong worksheet");
              return {
                getRange(address: string) {
                  if (address !== "A1:D3") throw Error("Wrong range");
                  return range;
                },
              };
            },
          },
        },
      });
    },
  });
  return { state, snapshot: () => structuredClone(state) };
}
