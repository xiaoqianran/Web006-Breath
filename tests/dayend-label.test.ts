import { describe, it, expect } from "vitest";
import {
  formatKeyTrayLine,
  formatClosingLampLine,
  formatDayendAside,
  formatDayendEncourage,
  formatDayendPair,
} from "../src/core";

describe("dayend-label", () => {
  it("钥匙浅盘与关店小灯文案", () => {
    expect(formatKeyTrayLine(1).length).toBeGreaterThan(4);
    expect(formatKeyTrayLine(2)).toMatch(/盘|钥|浅|日/);
    expect(formatClosingLampLine(0)).toMatch(/灯|暗|温存|盏/);
    expect(formatClosingLampLine(20)).toMatch(/灯|温|柔|关|亮|门/);
    expect(formatDayendAside(0)).toMatch(/钥|放|流通|收/);
    expect(formatDayendAside(5)).toContain("5");
    expect(formatDayendEncourage(0)).toMatch(/钥匙|小灯|收尾|温柔/);
    expect(formatDayendPair(1, 10)).toMatch(/盘|灯|钥/);
  });
});
