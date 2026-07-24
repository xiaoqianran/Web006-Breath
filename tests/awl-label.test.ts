import { describe, it, expect } from "vitest";
import {
  formatStitchingAwlLine,
  formatBoneFolderLine,
  formatAwlAside,
  formatAwlEncourage,
  formatAwlPair,
} from "../src/core";

describe("awl-label", () => {
  it("锥子与骨刀文案", () => {
    expect(formatStitchingAwlLine(1).length).toBeGreaterThan(4);
    expect(formatStitchingAwlLine(2)).toMatch(/柄|温|孔|缝/);
    expect(formatBoneFolderLine(0)).toMatch(/骨刀|凉|温存|折/);
    expect(formatBoneFolderLine(20)).toMatch(/骨|温|折|装|形/);
    expect(formatAwlAside(0)).toMatch(/孔|卡|入口/);
    expect(formatAwlAside(5)).toContain("5");
    expect(formatAwlEncourage(0)).toMatch(/孔|穿|开始/);
    expect(formatAwlPair(1, 10)).toMatch(/锥|骨|孔|折/);
  });
});
