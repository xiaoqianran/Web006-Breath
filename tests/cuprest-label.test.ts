import { describe, it, expect } from "vitest";
import {
  formatCupRestLine,
  formatTeaClothLine,
  formatCuprestAside,
  formatCuprestEncourage,
  formatCuprestPair,
} from "../src/core";

describe("cuprest-label", () => {
  it("杯托与茶巾文案", () => {
    expect(formatCupRestLine(1).length).toBeGreaterThan(4);
    expect(formatCupRestLine(2)).toMatch(/托|杯|稳|慌|接/);
    expect(formatTeaClothLine(0)).toMatch(/巾|叠|温存|擦/);
    expect(formatTeaClothLine(20)).toMatch(/巾|温|软|擦|桌|潮|失/);
    expect(formatCuprestAside(0)).toMatch(/托|空|流通|杯/);
    expect(formatCuprestAside(5)).toContain("5");
    expect(formatCuprestEncourage(0)).toMatch(/杯托|茶巾|热|杯/);
    expect(formatCuprestPair(1, 10)).toMatch(/托|巾|杯/);
  });
});
