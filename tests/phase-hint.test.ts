import { describe, it, expect } from "vitest";
import { phaseHint, formatPhaseHintLine, phaseLabel } from "../src/core";

describe("phase hints", () => {
  it("各阶段有提示且含阶段名", () => {
    for (const p of [
      "awaiting_emotion",
      "awaiting_vessel",
      "awaiting_circulation",
      "result",
      "day_complete",
    ] as const) {
      expect(phaseHint(p).length).toBeGreaterThan(4);
      expect(formatPhaseHintLine(p)).toContain(phaseLabel(p));
    }
    expect(phaseHint("awaiting_vessel")).toContain("容器");
    expect(phaseHint("day_complete")).toContain("下一日");
  });
});
