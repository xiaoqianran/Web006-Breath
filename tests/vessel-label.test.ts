import { describe, it, expect } from "vitest";
import {
  vesselNarrative,
  vesselCraftHint,
  formatVesselLine,
  formatVesselPickLine,
  listVesselNarratives,
  VESSEL_LABELS,
} from "../src/core";

describe("vessel labels", () => {
  it("五种形态皆有叙事", () => {
    for (const v of Object.keys(VESSEL_LABELS) as (keyof typeof VESSEL_LABELS)[]) {
      expect(vesselNarrative(v).length).toBeGreaterThan(4);
      expect(formatVesselLine(v)).toContain(VESSEL_LABELS[v]);
      expect(formatVesselPickLine(v)).toContain("选中");
      expect(vesselCraftHint(v).length).toBeGreaterThan(2);
    }
    expect(listVesselNarratives().length).toBe(5);
  });
});
