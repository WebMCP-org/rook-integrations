import { defineConfig } from "vite-plus";

const generated = ["discovery/*.json", "src/google-workspace.generated.ts"];

export default defineConfig({
  staged: {
    "*.{js,json,md,mjs,ts,yaml,yml}": "vp check --fix",
  },
  fmt: { ignorePatterns: generated },
  lint: {
    ignorePatterns: generated,
    plugins: ["typescript"],
    options: { typeAware: true, typeCheck: true },
    rules: { "typescript/no-base-to-string": "off" },
  },
});
