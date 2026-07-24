import { describe, it, expect } from "vitest";
import {
  formatRevisitWelcome,
  formatRevisitLuggageAside,
  formatRevisitEligibilityAside,
  formatRevisitBoardEmpty,
  REVISIT_FAVOR_THRESHOLD,
} from "../src/core";

describe("revisit-label", () => {
  it("再访欢迎与资格旁白", () => {
    expect(formatRevisitWelcome("阿初")).toContain("阿初");
    expect(formatRevisitLuggageAside()).toContain("行李");
    expect(formatRevisitBoardEmpty()).toContain("赠予");
    expect(
      formatRevisitEligibilityAside({
        allowed: true,
        reason: "high_favor",
        topFavor: REVISIT_FAVOR_THRESHOLD + 1,
        topName: "林晚",
      }),
    ).toContain("林晚");
    expect(
      formatRevisitEligibilityAside({
        allowed: false,
        reason: "no_gift",
        topFavor: 0,
        topName: null,
      }),
    ).toContain("赠予");
  });
});
