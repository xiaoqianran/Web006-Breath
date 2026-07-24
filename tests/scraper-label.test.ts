import { describe, it, expect } from "vitest";
import {
  formatDoughScraperLine,
  formatBakeParchmentLine,
  formatScraperAside,
  formatScraperEncourage,
  formatScraperPair,
} from "../src/core";

describe("scraper-label", () => {
  it("面团刮板与烘焙纸文案", () => {
    expect(formatDoughScraperLine(1).length).toBeGreaterThan(4);
    expect(formatDoughScraperLine(2)).toMatch(/板|薄|面|台|收|刮/);
    expect(formatBakeParchmentLine(0)).toMatch(/纸|卷|温存|铺|张/);
    expect(formatBakeParchmentLine(20)).toMatch(/纸|温|薄|烫|香|隔|垫/);
    expect(formatScraperAside(0)).toMatch(/刮|靠|流通|收|铲/);
    expect(formatScraperAside(5)).toContain("5");
    expect(formatScraperEncourage(0)).toMatch(/刮板|烘焙|散|面|收/);
    expect(formatScraperPair(1, 10)).toMatch(/刮|纸|板|面/);
  });
});
