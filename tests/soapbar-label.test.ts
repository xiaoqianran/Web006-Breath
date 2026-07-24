import { describe, expect, it } from "vitest";
import {
  formatSoapBarLine,
  formatWoodSoapDishLine,
  formatSoapbarAside,
  formatSoapbarEncourage,
  formatSoapbarPair,
} from "../src/core/soapbar-label";

describe("soapbar-label", () => {
  it("formats soap bar, wood dish, aside, encourage and pair", () => {
    expect(formatSoapBarLine(1).length).toBeGreaterThan(4);
    expect(formatSoapBarLine(2)).toMatch(/皂|淡|沫|刺|香|层/);
    expect(formatWoodSoapDishLine(0)).toMatch(/碟|干|温存|水|木|皂/);
    expect(formatWoodSoapDishLine(15)).toMatch(/皂|碟|转|干|手|店|温/);
    expect(formatSoapbarAside(0)).toMatch(/皂|完|流通|香|洗/);
    expect(formatSoapbarAside(5)).toContain("5");
    expect(formatSoapbarEncourage(0)).toMatch(/香|皂|碟|累|洗/);
    expect(formatSoapbarPair(1, 10)).toMatch(/香|皂|碟|木/);
  });
});
