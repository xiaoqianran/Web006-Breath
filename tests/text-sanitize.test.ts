import { describe, it, expect } from "vitest";
import { sanitizeDisplayText, isBlankText } from "../src/core";

describe("sanitizeDisplayText", () => {
  it("折叠空白并去控制符", () => {
    expect(sanitizeDisplayText("  你\u0001好  \n  世界  ")).toBe("你好 世界");
  });

  it("超长截断加省略号", () => {
    const s = sanitizeDisplayText("甲".repeat(10), 5);
    expect(s.length).toBe(5);
    expect(s.endsWith("…")).toBe(true);
  });

  it("空白判定", () => {
    expect(isBlankText("  \n\t ")).toBe(true);
    expect(isBlankText("一息")).toBe(false);
  });
});
