import { describe, expect, it } from "vitest";
import {
  formatDiffuserBottleLine,
  formatRattanReedLine,
  formatDiffuserAside,
  formatDiffuserEncourage,
  formatDiffuserPair,
} from "../src/core/diffuser-label";

describe("diffuser-label", () => {
  it("formats diffuser bottle, rattan reed, aside, encourage and pair", () => {
    expect(formatDiffuserBottleLine(1).length).toBeGreaterThan(4);
    expect(formatDiffuserBottleLine(2)).toMatch(/液|淡|润|香|鼻|空/);
    expect(formatRattanReedLine(0)).toMatch(/藤|条|干|温存|插/);
    expect(formatRattanReedLine(15)).toMatch(/藤|条|香|店|温|抽|瓶/);
    expect(formatDiffuserAside(0)).toMatch(/瓶|空|流通|香|散/);
    expect(formatDiffuserAside(5)).toContain("5");
    expect(formatDiffuserEncourage(0)).toMatch(/香|藤|条|散|瓶/);
    expect(formatDiffuserPair(1, 10)).toMatch(/香|藤|瓶|条/);
  });
});
