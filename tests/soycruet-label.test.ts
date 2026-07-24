import { describe, it, expect } from "vitest";
import {
  formatSoyCruetLine,
  formatVinegarDishLine,
  formatSoycruetAside,
  formatSoycruetEncourage,
  formatSoycruetPair,
} from "../src/core";

describe("soycruet-label", () => {
  it("小酱油盅与醋碟文案", () => {
    expect(formatSoyCruetLine(1).length).toBeGreaterThan(4);
    expect(formatSoyCruetLine(2)).toMatch(/酱|浅|味|咸|点/);
    expect(formatVinegarDishLine(0)).toMatch(/醋|空|温存|滴/);
    expect(formatVinegarDishLine(20)).toMatch(/酸|温|浅|香|醒|味|碟/);
    expect(formatSoycruetAside(0)).toMatch(/盅|碟|闲|流通|味/);
    expect(formatSoycruetAside(5)).toContain("5");
    expect(formatSoycruetEncourage(0)).toMatch(/酱油|醋碟|轻|味/);
    expect(formatSoycruetPair(1, 10)).toMatch(/酱|醋|盅|碟/);
  });
});
