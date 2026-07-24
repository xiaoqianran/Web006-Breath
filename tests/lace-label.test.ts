import { describe, it, expect } from "vitest";
import {
  formatLaceCurtainLine,
  formatLaceLightLine,
  formatLaceAside,
  formatLaceEncourage,
  formatLacePair,
} from "../src/core";

describe("lace-label", () => {
  it("窗纱与蕾丝光文案", () => {
    expect(formatLaceCurtainLine(1).length).toBeGreaterThan(4);
    expect(formatLaceCurtainLine(2)).toMatch(/蕾丝|尘|季/);
    expect(formatLaceLightLine(0)).toMatch(/淡|温存|蕾丝/);
    expect(formatLaceLightLine(20)).toMatch(/光|温|纱|柔/);
    expect(formatLaceAside(0)).toMatch(/无|纱/);
    expect(formatLaceAside(2)).toContain("2");
    expect(formatLaceEncourage(0)).toMatch(/窗纱|第一/);
    expect(formatLacePair(1, 10)).toMatch(/窗|纱|光|蕾丝/);
  });
});
