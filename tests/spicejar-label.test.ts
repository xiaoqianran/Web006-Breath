import { describe, it, expect } from "vitest";
import {
  formatSpiceJarLine,
  formatWoodScoopLine,
  formatSpicejarAside,
  formatSpicejarEncourage,
  formatSpicejarPair,
} from "../src/core";

describe("spicejar-label", () => {
  it("香料小罐与木勺文案", () => {
    expect(formatSpiceJarLine(1).length).toBeGreaterThan(4);
    expect(formatSpiceJarLine(2)).toMatch(/香|淡|气|味|点/);
    expect(formatWoodScoopLine(0)).toMatch(/勺|干|温存|撮/);
    expect(formatWoodScoopLine(20)).toMatch(/勺|温|小|香|点|盖|茶/);
    expect(formatSpicejarAside(0)).toMatch(/罐|合|流通|香/);
    expect(formatSpicejarAside(5)).toContain("5");
    expect(formatSpicejarEncourage(0)).toMatch(/香料|木勺|香|点/);
    expect(formatSpicejarPair(1, 10)).toMatch(/香|勺|罐/);
  });
});
