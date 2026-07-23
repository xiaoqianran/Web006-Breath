import { describe, it, expect } from "vitest";
import {
  formatSaveEmptyLine,
  formatSaveReadyLine,
  formatContinueButtonLabel,
  formatSaveEncourage,
  formatAutosaveHint,
} from "../src/core";

describe("save-label", () => {
  it("空档与有档文案", () => {
    expect(formatSaveEmptyLine()).toContain("没有");
    expect(formatSaveReadyLine(3, 12)).toContain("第 3 日");
    expect(formatContinueButtonLabel(true)).toBe("继续经营");
    expect(formatContinueButtonLabel(false)).toContain("暂无");
    expect(formatSaveEncourage(false)).toContain("第一次");
    expect(formatAutosaveHint()).toContain("自动");
  });
});
