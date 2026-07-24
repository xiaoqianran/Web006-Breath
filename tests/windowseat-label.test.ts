import { describe, it, expect } from "vitest";
import {
  formatWindowCushionLine,
  formatSheerCurtainLine,
  formatWindowseatAside,
  formatWindowseatEncourage,
  formatWindowseatPair,
} from "../src/core";

describe("windowseat-label", () => {
  it("窗边软垫与薄窗帘文案", () => {
    expect(formatWindowCushionLine(1).length).toBeGreaterThan(4);
    expect(formatWindowCushionLine(2)).toMatch(/垫|软|坐|吵|接/);
    expect(formatSheerCurtainLine(0)).toMatch(/帘|垂|温存|角/);
    expect(formatSheerCurtainLine(20)).toMatch(/纱|温|薄|光|眼|透/);
    expect(formatWindowseatAside(0)).toMatch(/垫|空|流通|窗|坐/);
    expect(formatWindowseatAside(5)).toContain("5");
    expect(formatWindowseatEncourage(0)).toMatch(/窗|垫|帘|坐|光/);
    expect(formatWindowseatPair(1, 10)).toMatch(/垫|帘|软|窗/);
  });
});
