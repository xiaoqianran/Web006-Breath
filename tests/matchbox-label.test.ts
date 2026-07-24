import { describe, expect, it } from "vitest";
import {
  formatMatchboxLine,
  formatMatchstickLine,
  formatMatchboxAside,
  formatMatchboxEncourage,
  formatMatchboxPair,
} from "../src/core/matchbox-label";

describe("matchbox-label", () => {
  it("formats matchbox, matchstick, aside, encourage and pair", () => {
    expect(formatMatchboxLine(1).length).toBeGreaterThan(4);
    expect(formatMatchboxLine(2)).toMatch(/盒|轻|装|点|慌|量/);
    expect(formatMatchstickLine(0)).toMatch(/火|柴|整|温存|划/);
    expect(formatMatchstickLine(15)).toMatch(/火|擦|光|店|温|磷|暗/);
    expect(formatMatchboxAside(0)).toMatch(/盒|满|流通|木|点|燃/);
    expect(formatMatchboxAside(5)).toContain("5");
    expect(formatMatchboxEncourage(0)).toMatch(/火|柴|盒|光|点/);
    expect(formatMatchboxPair(1, 10)).toMatch(/火|盒|柴|划/);
  });
});
