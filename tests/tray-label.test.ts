import { describe, it, expect } from "vitest";
import {
  formatTrayPlaceLine,
  formatTrayFullAside,
  formatTrayServeAside,
  formatTrayEncourage,
} from "../src/core";

describe("tray-label", () => {
  it("托盘陈列文案", () => {
    expect(formatTrayPlaceLine("flower")).toContain("花");
    expect(formatTrayFullAside(0)).toContain("空");
    expect(formatTrayFullAside(3)).toContain("3");
    expect(formatTrayServeAside(true)).toContain("当面");
    expect(formatTrayServeAside(false)).toContain("货架");
    expect(formatTrayEncourage()).toContain("托盘");
  });
});
