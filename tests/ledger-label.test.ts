import { describe, it, expect } from "vitest";
import {
  formatShopLedgerLine,
  formatSoftPencilLine,
  formatLedgerAside,
  formatLedgerEncourage,
  formatLedgerPair,
} from "../src/core";

describe("ledger-label", () => {
  it("店账册与软铅笔文案", () => {
    expect(formatShopLedgerLine(1).length).toBeGreaterThan(4);
    expect(formatShopLedgerLine(2)).toMatch(/账|折|翻|温/);
    expect(formatSoftPencilLine(0)).toMatch(/铅笔|钝|温存|写/);
    expect(formatSoftPencilLine(20)).toMatch(/笔|温|浅|记|算|走|诗/);
    expect(formatLedgerAside(0)).toMatch(/账|空|流通|行/);
    expect(formatLedgerAside(5)).toContain("5");
    expect(formatLedgerEncourage(0)).toMatch(/账|记|笔/);
    expect(formatLedgerPair(1, 10)).toMatch(/账|笔|册/);
  });
});
