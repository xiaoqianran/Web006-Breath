import { describe, expect, it } from "vitest";
import {
  formatSoftButtonTinLine,
  formatButtonScoopLine,
  formatSoftbuttonAside,
  formatSoftbuttonEncourage,
  formatSoftbuttonPair,
} from "../src/core/softbutton-label";

describe("softbutton-label", () => {
  it("formats soft button tin, scoop, aside, encourage and pair", () => {
    expect(formatSoftButtonTinLine(1).length).toBeGreaterThan(4);
    expect(formatSoftButtonTinLine(2)).toMatch(/扣|轻|补|颗|压|布/);
    expect(formatButtonScoopLine(0)).toMatch(/勺|净|温存|舀|颗|木/);
    expect(formatButtonScoopLine(15)).toMatch(/勺|扣|罐|店|温|布|舀/);
    expect(formatSoftbuttonAside(0)).toMatch(/罐|满|流通|颗|扣|圆/);
    expect(formatSoftbuttonAside(5)).toContain("5");
    expect(formatSoftbuttonEncourage(0)).toMatch(/扣|罐|勺|开|线/);
    expect(formatSoftbuttonPair(1, 10)).toMatch(/扣|勺|罐|木/);
  });
});
