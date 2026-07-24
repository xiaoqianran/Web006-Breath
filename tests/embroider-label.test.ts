import { describe, expect, it } from "vitest";
import {
  formatEmbroideryHoopLine,
  formatEmbroideryFlossLine,
  formatEmbroiderAside,
  formatEmbroiderEncourage,
  formatEmbroiderPair,
} from "../src/core/embroider-label";

describe("embroider-label", () => {
  it("formats embroidery hoop, floss, aside, encourage and pair", () => {
    expect(formatEmbroideryHoopLine(1).length).toBeGreaterThan(4);
    expect(formatEmbroideryHoopLine(2)).toMatch(/圈|稳|绷|寸|勒|破|绣/);
    expect(formatEmbroideryFlossLine(0)).toMatch(/线|绞|温存|拆|缕|绣/);
    expect(formatEmbroideryFlossLine(15)).toMatch(/线|绣|布|店|温|色|空|穿/);
    expect(formatEmbroiderAside(0)).toMatch(/绷|空|流通|针|绣|白/);
    expect(formatEmbroiderAside(5)).toContain("5");
    expect(formatEmbroiderEncourage(0)).toMatch(/绣|绷|线|空|白/);
    expect(formatEmbroiderPair(1, 10)).toMatch(/绣|绷|线|圈/);
  });
});
