import { describe, expect, it } from "vitest";
import {
  formatCottonPadLine,
  formatGauzeRollLine,
  formatGauzeAside,
  formatGauzeEncourage,
  formatGauzePair,
} from "../src/core/gauze-label";

describe("gauze-label", () => {
  it("formats cotton pad, gauze roll, aside, encourage and pair", () => {
    expect(formatCottonPadLine(1).length).toBeGreaterThan(4);
    expect(formatCottonPadLine(2)).toMatch(/垫|薄|托|层|压|疼/);
    expect(formatGauzeRollLine(0)).toMatch(/纱|卷|紧|温存|圈/);
    expect(formatGauzeRollLine(15)).toMatch(/纱|展|护|皮|店|温/);
    expect(formatGauzeAside(0)).toMatch(/垫|叠|流通|白|托/);
    expect(formatGauzeAside(5)).toContain("5");
    expect(formatGauzeEncourage(0)).toMatch(/棉|纱|托|疼|垫/);
    expect(formatGauzePair(1, 10)).toMatch(/棉|纱|垫|卷/);
  });
});
