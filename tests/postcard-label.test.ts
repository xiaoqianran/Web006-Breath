import { describe, it, expect } from "vitest";
import {
  formatPostcardStamp,
  formatPostcardAddress,
  formatPostcardBody,
  formatPostcardLine,
  formatPostcardStackAside,
} from "../src/core";

describe("postcard-label", () => {
  it("明信片邮戳与正文", () => {
    expect(formatPostcardStamp("rare")).toContain("珍稀");
    expect(formatPostcardAddress("gift")).toContain("当面");
    expect(formatPostcardAddress("display")).toContain("货架");
    expect(formatPostcardBody("music", "fine", "gift")).toContain("音乐");
    expect(formatPostcardLine("flower", "simple", "display")).toContain("邮戳");
    expect(formatPostcardStackAside(0)).toContain("空");
    expect(formatPostcardStackAside(3)).toContain("3");
  });
});
