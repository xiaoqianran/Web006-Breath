import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("help overlay wiring", () => {
  it("app 源码含帮助覆盖层与 ? 快捷键", () => {
    const app = readFileSync(resolve(root, "src/ui/app.ts"), "utf8");
    expect(app).toContain("help-overlay");
    expect(app).toContain('ev.key === "?"');
    expect(app).toContain("renderHelpOverlay");
    expect(app).toContain("helpOpen");
  });

  it("样式含 help-overlay", () => {
    const css = readFileSync(resolve(root, "src/ui/styles.css"), "utf8");
    expect(css).toContain(".help-overlay");
  });
});
