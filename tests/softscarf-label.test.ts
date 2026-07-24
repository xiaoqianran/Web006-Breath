import { describe, expect, it } from "vitest";
import {
  formatSoftWoolScarfLine,
  formatWoodCoatPegLine,
  formatSoftscarfAside,
  formatSoftscarfEncourage,
  formatSoftscarfPair,
} from "../src/core/softscarf-label";

describe("softscarf-label", () => {
  it("formats soft wool scarf, wood coat peg, aside, encourage and pair", () => {
    expect(formatSoftWoolScarfLine(1).length).toBeGreaterThan(4);
    expect(formatSoftWoolScarfLine(2)).toMatch(/巾|软|围|圈|勒|颈/);
    expect(formatWoodCoatPegLine(0)).toMatch(/钉|空|温存|挂|木|衣/);
    expect(formatWoodCoatPegLine(15)).toMatch(/围|巾|钉|店|温|肩|挂/);
    expect(formatSoftscarfAside(0)).toMatch(/巾|叠|流通|暖|围|圈/);
    expect(formatSoftscarfAside(5)).toContain("5");
    expect(formatSoftscarfEncourage(0)).toMatch(/围|巾|钉|暖|捂/);
    expect(formatSoftscarfPair(1, 10)).toMatch(/围|巾|钉|羊|木/);
  });
});
