import { defineConfig } from "vite-plus";
export default defineConfig({
  fmt: { ignorePatterns: ["node_modules/**"] },
  test: { include: ["test/*.test.ts"] },
});
