import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  vesselNarrative,
  vesselCraftHint,
  formatVesselLine,
  formatVesselPickLine,
  listVesselNarratives,
  vesselArtPublicUrl,
  vesselArtDiskPath,
  VESSEL_LABELS,
} from "../src/core";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("vessel labels", () => {
  it("五种形态皆有叙事", () => {
    for (const v of Object.keys(VESSEL_LABELS) as (keyof typeof VESSEL_LABELS)[]) {
      expect(vesselNarrative(v).length).toBeGreaterThan(4);
      expect(formatVesselLine(v)).toContain(VESSEL_LABELS[v]);
      expect(formatVesselPickLine(v)).toContain("选中");
      expect(vesselCraftHint(v).length).toBeGreaterThan(2);
      expect(vesselArtPublicUrl(v)).toMatch(/^\/assets\//);
      expect(existsSync(resolve(root, vesselArtDiskPath(v))), v).toBe(true);
    }
    expect(listVesselNarratives().length).toBe(5);
  });
});
