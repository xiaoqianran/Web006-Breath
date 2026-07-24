import { describe, it, expect } from "vitest";
import {
  formatUmbrellaStandLine,
  formatThresholdMatLine,
  formatEntryAside,
  formatEntryEncourage,
  formatEntryPair,
} from "../src/core";

describe("entry-label", () => {
  it("雨伞架与门口踏垫文案", () => {
    expect(formatUmbrellaStandLine(1).length).toBeGreaterThan(4);
    expect(formatUmbrellaStandLine(2)).toMatch(/架|伞|稳|接|慌/);
    expect(formatThresholdMatLine(0)).toMatch(/垫|干|温存|脚/);
    expect(formatThresholdMatLine(20)).toMatch(/垫|温|软|脚|泥/);
    expect(formatEntryAside(0)).toMatch(/伞|空|流通|放/);
    expect(formatEntryAside(5)).toContain("5");
    expect(formatEntryEncourage(0)).toMatch(/伞架|踏垫|脚/);
    expect(formatEntryPair(1, 10)).toMatch(/伞|垫|架/);
  });
});
