import { describe, expect, it } from "vitest";
import {
  formatKneeBlanketLine,
  formatBlanketBoardLine,
  formatKneeblanketAside,
  formatKneeblanketEncourage,
  formatKneeblanketPair,
} from "../src/core/kneeblanket-label";

describe("kneeblanket-label", () => {
  it("formats knee blanket, board, aside, encourage and pair", () => {
    expect(formatKneeBlanketLine(1).length).toBeGreaterThan(4);
    expect(formatKneeBlanketLine(2)).toMatch(/毯|轻|盖|角|压|腿|膝/);
    expect(formatBlanketBoardLine(0)).toMatch(/板|空|温存|托|叠|木/);
    expect(formatBlanketBoardLine(15)).toMatch(/毯|板|店|温|暖|膝|坐|落/);
    expect(formatKneeblanketAside(0)).toMatch(/毯|叠|流通|暖|盖|角/);
    expect(formatKneeblanketAside(5)).toContain("5");
    expect(formatKneeblanketEncourage(0)).toMatch(/膝|毯|板|暖|捂/);
    expect(formatKneeblanketPair(1, 10)).toMatch(/膝|毯|板|暖|绒/);
  });
});
