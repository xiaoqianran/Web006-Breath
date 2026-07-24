import { describe, expect, it } from "vitest";
import {
  formatMiniTorchLine,
  formatSolderBoardLine,
  formatSofttorchAside,
  formatSofttorchEncourage,
  formatSofttorchPair,
} from "../src/core/softtorch-label";

describe("softtorch-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatMiniTorchLine(1).length).toBeGreaterThan(4);
    expect(formatMiniTorchLine(2)).toMatch(/火|柔|点|下|硬|烧/);
    expect(formatSolderBoardLine(0)).toMatch(/焊|板|净|温存|放|件/);
    expect(formatSolderBoardLine(15)).toMatch(/件|板|店|接|焊|稳/);
    expect(formatSofttorchAside(0)).toMatch(/灯|熄|流通|火|暖/);
    expect(formatSofttorchAside(12)).toMatch(/12|焊|许|可|温柔/);
    expect(formatSofttorchAside(30)).toMatch(/30|逾|轻焊|火/);
    expect(formatSofttorchEncourage(0)).toMatch(/喷灯|焊板|接|缝|焊/);
    expect(formatSofttorchEncourage(2)).toMatch(/灯|点|焊|流通|接/);
    expect(formatSofttorchEncourage(5)).toMatch(/灯|熄|焊|松|肩/);
    const pair = formatSofttorchPair(3, 20);
    expect(pair).toContain(formatMiniTorchLine(3));
    expect(pair).toContain(formatSolderBoardLine(20));
  });
});
