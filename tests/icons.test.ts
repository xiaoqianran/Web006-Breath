import { describe, it, expect } from "vitest";
import { VESSEL_SVG, vesselIconHtml } from "../src/ui/icons";
import type { VesselKind } from "../src/core";

const kinds: VesselKind[] = ["flower", "tea", "art", "music", "object"];

describe("vessel SVG icons", () => {
  it("五形态均有 SVG 且含 viewBox", () => {
    for (const k of kinds) {
      const svg = vesselIconHtml(k);
      expect(svg).toContain("<svg");
      expect(svg).toContain("viewBox");
      expect(VESSEL_SVG[k]).toBe(svg);
    }
  });
});
