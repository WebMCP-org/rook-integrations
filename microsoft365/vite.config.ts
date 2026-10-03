import { defineConfig } from "vite-plus";
export default defineConfig({
  fmt: { ignorePatterns: ["dist/**"] },
  pack: {
    entry: ["src/index.ts"],
    format: ["esm"],
    platform: "browser",
    dts: true,
    clean: true,
    target: "esnext",
    tsconfig: "./tsconfig.json",
  },
  test: { include: ["test/*.test.ts"] },
  lint: {
    ignorePatterns: ["dist/**"],
    plugins: ["typescript"],
    options: { typeAware: true, typeCheck: true },
  },
});
