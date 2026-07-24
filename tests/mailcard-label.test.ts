import { describe, it, expect } from "vitest";
import {
  formatBlankPostcardLine,
  formatStampBoxLine,
  formatMailcardAside,
  formatMailcardEncourage,
  formatMailcardPair,
} from "../src/core";

describe("mailcard-label", () => {
  it("空白明信片与邮票盒文案", () => {
    expect(formatBlankPostcardLine(1).length).toBeGreaterThan(4);
    expect(formatBlankPostcardLine(2)).toMatch(/片|写|轻|远|讯/);
    expect(formatStampBoxLine(0)).toMatch(/邮|盒|温存|枚/);
    expect(formatStampBoxLine(20)).toMatch(/票|温|小|寄|空|白|章|角/);
    expect(formatMailcardAside(0)).toMatch(/片|空白|流通|寄|温/);
    expect(formatMailcardAside(5)).toContain("5");
    expect(formatMailcardEncourage(0)).toMatch(/明信片|邮票|寄/);
    expect(formatMailcardPair(1, 10)).toMatch(/明信片|邮|片|票/);
  });
});
