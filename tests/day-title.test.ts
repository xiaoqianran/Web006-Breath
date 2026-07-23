import { describe, it, expect } from "vitest";
import { getDayScript } from "../src/data/day-scripts";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("day title wiring", () => {
  it("getDayScript(1) 有标题", () => {
    expect(getDayScript(1).title.length).toBeGreaterThan(0);
  });

  it("app 引用 getDayScript 标题", () => {
    const app = readFileSync(resolve(root, "src/ui/app.ts"), "utf8");
    expect(app).toContain("getDayScript");
    expect(app).toContain(".title");
  });
});
