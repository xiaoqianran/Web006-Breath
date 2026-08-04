import { defineConfig } from "vitest/config";

/** GitHub Pages 项目站路径，如 /Web006-Breath/；本地默认 / */
const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  root: ".",
  publicDir: "public",
  server: {
    port: 5173,
    strictPort: false,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts", "src/**/*.test.ts"],
  },
});
