import { describe, it, expect } from "vitest";
import {
  formatSealForQuality,
  formatSealCountAside,
  formatMilestoneSeal,
  formatSealEncourage,
} from "../src/core";

describe("seal-label", () => {
  it("印鉴与纪念文案", () => {
    expect(formatSealForQuality("rare")).toContain("珍稀");
    expect(formatSealForQuality("simple")).toContain("素");
    expect(formatSealCountAside(0)).toContain("第一枚");
    expect(formatSealCountAside(12)).toContain("12");
    expect(formatMilestoneSeal(100, 10)).toContain("百");
    expect(formatMilestoneSeal(5, 3)).toContain("慢慢");
    expect(formatSealEncourage("fine")).toContain("精致");
  });
});
