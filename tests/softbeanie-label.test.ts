import { describe, expect, it } from "vitest";
import {
  formatSoftBeanieLine,
  formatWoodHatFormLine,
  formatSoftbeanieAside,
  formatSoftbeanieEncourage,
  formatSoftbeaniePair,
} from "../src/core/softbeanie-label";

describe("softbeanie-label", () => {
  it("formats soft beanie, wood hat form, aside, encourage and pair", () => {
    expect(formatSoftBeanieLine(1).length).toBeGreaterThan(4);
    expect(formatSoftBeanieLine(2)).toMatch(/帽|软|捂|顶|勒|额/);
    expect(formatWoodHatFormLine(0)).toMatch(/托|空|温存|架|顶|木|帽/);
    expect(formatWoodHatFormLine(15)).toMatch(/帽|托|店|温|暖|头|架/);
    expect(formatSoftbeanieAside(0)).toMatch(/帽|叠|流通|暖|戴|顶/);
    expect(formatSoftbeanieAside(5)).toContain("5");
    expect(formatSoftbeanieEncourage(0)).toMatch(/毛|线|帽|托|头|捂/);
    expect(formatSoftbeaniePair(1, 10)).toMatch(/帽|托|毛|线|木/);
  });
});
