import { describe, it, expect } from "vitest";
import {
  formatReceiptSlipLine,
  formatSoftRoundStampLine,
  formatReceiptAside,
  formatReceiptEncourage,
  formatReceiptPair,
} from "../src/core";

describe("receipt-label", () => {
  it("收据条与小圆戳文案", () => {
    expect(formatReceiptSlipLine(1).length).toBeGreaterThan(4);
    expect(formatReceiptSlipLine(2)).toMatch(/条|字|温|凭/);
    expect(formatSoftRoundStampLine(0)).toMatch(/戳|凉|温存|盖/);
    expect(formatSoftRoundStampLine(20)).toMatch(/戳|温|圆|凭|空|盖|记/);
    expect(formatReceiptAside(0)).toMatch(/条|撕|流通|凭证/);
    expect(formatReceiptAside(5)).toContain("5");
    expect(formatReceiptEncourage(0)).toMatch(/收据|凭证|条/);
    expect(formatReceiptPair(1, 10)).toMatch(/收据|条|戳/);
  });
});
