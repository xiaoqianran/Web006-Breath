import { describe, it, expect } from "vitest";
import {
  formatMixBowlLine,
  formatWireWhiskLine,
  formatMixbowlAside,
  formatMixbowlEncourage,
  formatMixbowlPair,
} from "../src/core";

describe("mixbowl-label", () => {
  it("搅拌盆与打蛋器文案", () => {
    expect(formatMixBowlLine(1).length).toBeGreaterThan(4);
    expect(formatMixBowlLine(2)).toMatch(/盆|深|材|催|装/);
    expect(formatWireWhiskLine(0)).toMatch(/器|闲|温存|圈|打/);
    expect(formatWireWhiskLine(20)).toMatch(/器|温|圆|匀|心|搅|软/);
    expect(formatMixbowlAside(0)).toMatch(/盆|空|流通|和/);
    expect(formatMixbowlAside(5)).toContain("5");
    expect(formatMixbowlEncourage(0)).toMatch(/搅拌|打蛋|和|一/);
    expect(formatMixbowlPair(1, 10)).toMatch(/盆|器|搅|打/);
  });
});
