import { defineConfig } from "vite-plus";
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  test: {
    include: ["test/*.boundary.test.ts"],
    browser: {
      enabled: true,
      provider: playwright(),
      headless: true,
      instances: [{ browser: "chromium" }],
    },
  },
});
