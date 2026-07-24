import { describe, it, expect } from "vitest";
import {
  vesselCompassDirection,
  formatCompassNeedleLine,
  formatCompassForEmotion,
  formatCompassAside,
  formatMapPathAside,
  type Emotion,
} from "../src/core";

const e: Emotion = {
  id: "c1",
  guestName: "测",
  text: "想被温柔记得。",
  tags: ["想念", "温柔"],
  intensity: 4,
};

describe("compass-label", () => {
  it("形态方向与罗盘文案", () => {
    expect(vesselCompassDirection("flower")).toContain("东");
    expect(formatCompassNeedleLine("tea")).toContain("茶");
    expect(formatCompassForEmotion(null)).toContain("接待");
    expect(formatCompassForEmotion(e)).toMatch(/罗盘|花|茶|画|音乐|物件/);
    expect(formatCompassAside(e)).toContain("非强制");
    expect(formatMapPathAside(1)).toContain("起点");
    expect(formatMapPathAside(12)).toContain("12");
  });
});
