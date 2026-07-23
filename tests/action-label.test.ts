import { describe, it, expect } from "vitest";
import {
  actionLabel,
  actionNarrative,
  formatActionLine,
  formatCirculationResultLine,
} from "../src/core";

describe("circulation action labels", () => {
  it("赠予与上架文案不同", () => {
    expect(actionLabel("gift")).toBe("赠予");
    expect(actionLabel("display")).toBe("上架");
    expect(actionNarrative("gift")).toContain("心意");
    expect(actionNarrative("display")).toContain("货架");
    expect(formatActionLine("gift")).toContain("赠予");
    expect(formatCirculationResultLine("display", 3)).toContain("+3");
    expect(formatCirculationResultLine("gift", 5)).toContain("赠予完成");
  });
});
