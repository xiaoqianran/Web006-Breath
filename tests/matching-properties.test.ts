import { describe, it, expect } from "vitest";
import { evaluateMatch, VESSEL_AFFINITY, type Emotion, type VesselKind } from "../src/core";

const vessels = Object.keys(VESSEL_AFFINITY) as VesselKind[];

function emotion(tags: Emotion["tags"], intensity: number): Emotion {
  return {
    id: "p",
    guestName: "prop",
    text: "属性测试用语。",
    tags,
    intensity,
  };
}

describe("matching properties", () => {
  it("流通价值恒为 1 + matchScore + 品质加成", () => {
    for (const vessel of vessels) {
      for (let intensity = 1; intensity <= 5; intensity++) {
        const e = emotion(["想念", "温柔"], intensity);
        const r = evaluateMatch(e, vessel);
        const bonus = r.quality === "rare" ? 3 : r.quality === "fine" ? 1 : 0;
        expect(r.circulationValue).toBe(1 + r.matchScore + bonus);
      }
    }
  });

  it("matchScore 非负且 matchedTags 都属于双方", () => {
    const e = emotion(["孤独", "勇气"], 4);
    for (const vessel of vessels) {
      const r = evaluateMatch(e, vessel);
      expect(r.matchScore).toBeGreaterThanOrEqual(0);
      for (const t of r.matchedTags) {
        expect(e.tags).toContain(t);
        expect(VESSEL_AFFINITY[vessel]).toContain(t);
      }
    }
  });

  it("品质分档与 matchScore 阈值一致", () => {
    for (const vessel of vessels) {
      const r = evaluateMatch(emotion(["安心"], 1), vessel);
      if (r.matchScore >= 4) expect(r.quality).toBe("rare");
      else if (r.matchScore >= 2) expect(r.quality).toBe("fine");
      else expect(r.quality).toBe("simple");
    }
  });
});
