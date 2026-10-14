import { defineConfig } from "vite-plus";
export default defineConfig({
  pack: {
    entry: ["src/index.ts"],
    format: ["esm"],
    platform: "browser",
    dts: true,
    clean: true,
    target: "esnext",
  },
  fmt: { ignorePatterns: ["dist/**"] },
  lint: { ignorePatterns: ["dist/**"] },
});
