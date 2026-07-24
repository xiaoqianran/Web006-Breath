import { describe, it, expect } from "vitest";
import {
  formatOpenShopLine,
  formatKeyHookAside,
  formatShuttersLine,
  formatOpenEncourage,
} from "../src/core";

describe("open-label", () => {
  it("开店钥匙与百叶窗文案", () => {
    expect(formatOpenShopLine(1)).toContain("第一日");
    expect(formatOpenShopLine(10)).toContain("第 10 日");
    expect(formatKeyHookAside(true)).toContain("继续");
    expect(formatKeyHookAside(false)).toContain("空");
    expect(formatShuttersLine("晴窗")).toContain("晴窗");
    expect(formatOpenEncourage(1)).toContain("门铃");
  });
});
