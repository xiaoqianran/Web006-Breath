import { describe, expect, it } from "vitest";
import {
  formatEmbroSnipsLine,
  formatSnipsSheathLine,
  formatEmbrosnipsAside,
  formatEmbrosnipsEncourage,
  formatEmbrosnipsPair,
} from "../src/core/embrosnips-label";

describe("embrosnips-label", () => {
  it("formats embroid snips, sheath, aside, encourage and pair", () => {
    expect(formatEmbroSnipsLine(1).length).toBeGreaterThan(4);
    expect(formatEmbroSnipsLine(2)).toMatch(/剪|轻|缕|撕|线/);
    expect(formatSnipsSheathLine(0)).toMatch(/套|空|温存|收|把|皮/);
    expect(formatSnipsSheathLine(15)).toMatch(/剪|套|店|温|锋|收|滑/);
    expect(formatEmbrosnipsAside(0)).toMatch(/剪|合|流通|缕|线/);
    expect(formatEmbrosnipsAside(5)).toContain("5");
    expect(formatEmbrosnipsEncourage(0)).toMatch(/绣|花|剪|套|多|余/);
    expect(formatEmbrosnipsPair(1, 10)).toMatch(/剪|套|绣|皮/);
  });
});
