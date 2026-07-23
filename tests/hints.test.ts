import { describe, it, expect } from "vitest";
import { formatHintLine, listVesselHints, type Emotion } from "../src/core";

const emotion: Emotion = {
  id: "h1",
  guestName: "提示客",
  text: "想念像潮水。",
  tags: ["想念", "温柔"],
  intensity: 4,
};

describe("vessel hints", () => {
  it("花应对想念/温柔有更高重合", () => {
    const hints = listVesselHints(emotion);
    expect(hints.length).toBe(5);
    const flower = hints.find((h) => h.vessel === "flower");
    const tea = hints.find((h) => h.vessel === "tea");
    expect(flower).toBeDefined();
    expect(tea).toBeDefined();
    expect(flower!.overlap).toBeGreaterThan(tea!.overlap);
    expect(hints[0]!.vessel).toBe("flower");
  });

  it("提示文案随重合变化", () => {
    expect(formatHintLine({ vessel: "tea", label: "茶", overlap: 0, predictedQuality: "simple" })).toContain(
      "尚远",
    );
    expect(formatHintLine({ vessel: "flower", label: "花", overlap: 2, predictedQuality: "rare" })).toContain(
      "契合",
    );
  });
});
