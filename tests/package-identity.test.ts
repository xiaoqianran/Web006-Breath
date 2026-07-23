import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("package identity", () => {
  it("package.json 名称与版本符合一息项目", () => {
    const pkg = JSON.parse(readFileSync(resolve(root, "package.json"), "utf8"));
    expect(pkg.name).toBe("yixi-gentle-moments");
    expect(pkg.version).toMatch(/^0\.2\./);
    expect(pkg.scripts.check).toContain("test");
    expect(pkg.scripts.smoke).toBeTruthy();
  });
});
