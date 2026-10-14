import { defineConfig } from "vite-plus";

const generated = ["discovery/*.json", "dist/**", "src/google-workspace*.generated.ts"];

export default defineConfig({
  staged: {
    "*.{js,json,md,mjs,ts,yaml,yml}": "vp check --fix",
  },
  pack: {
    entry: ["src/google-workspace.ts"],
    format: ["esm"],
    platform: "browser",
    dts: true,
    clean: true,
    minify: false,
    sourcemap: false,
    target: "esnext",
    treeshake: true,
    tsconfig: "./tsconfig.json",
  },
  fmt: { ignorePatterns: generated },
  lint: {
    ignorePatterns: generated,
    plugins: ["typescript"],
    options: { typeAware: true, typeCheck: true },
    rules: { "typescript/no-base-to-string": "off" },
  },
});
