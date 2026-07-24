import { describe, it, expect } from "vitest";
import {
  formatBindingThreadLine,
  formatSewingNeedleLine,
  formatBindingAside,
  formatBindingEncourage,
  formatBindingPair,
} from "../src/core";

describe("binding-label", () => {
  it("装订线与穿线针文案", () => {
    expect(formatBindingThreadLine(1).length).toBeGreaterThan(4);
    expect(formatBindingThreadLine(2)).toMatch(/线|蜡|抽|顺/);
    expect(formatSewingNeedleLine(0)).toMatch(/针|凉|温存|孔/);
    expect(formatSewingNeedleLine(20)).toMatch(/针|温|缝|页|翻/);
    expect(formatBindingAside(0)).toMatch(/线|装订|瞬间/);
    expect(formatBindingAside(5)).toContain("5");
    expect(formatBindingEncourage(0)).toMatch(/线|串|理/);
    expect(formatBindingPair(1, 10)).toMatch(/装订|线|针/);
  });
});
