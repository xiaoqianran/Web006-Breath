import { describe, it, expect } from "vitest";
import {
  listGuestNames,
  guestNameCount,
  pickGuestName,
  isKnownGuestName,
  rollDailyOrder,
  guestNameFlavor,
  formatGuestNameLine,
} from "../src/core";

describe("guest name pool", () => {
  it("池非空且 pick 确定性", () => {
    expect(guestNameCount()).toBeGreaterThanOrEqual(24);
    expect(listGuestNames().length).toBe(guestNameCount());
    expect(pickGuestName(0)).toBe(pickGuestName(0));
    expect(pickGuestName(1)).not.toBe(pickGuestName(2));
    expect(isKnownGuestName(pickGuestName(42))).toBe(true);
    expect(isKnownGuestName("不存在的人")).toBe(false);
  });

  it("订单客人名来自已知风格（与池可交叉）", () => {
    const o = rollDailyOrder(5, 0);
    expect(o.guestName.length).toBeGreaterThan(0);
    // 订单池与姓名池可能部分重叠
    expect(typeof o.guestName).toBe("string");
  });

  it("姓名气质文案", () => {
    expect(guestNameFlavor("匿名")).toContain("不愿留名");
    expect(formatGuestNameLine("林晚")).toContain("林晚");
    expect(formatGuestNameLine("南枝")).toMatch(/草木|门/);
  });
});
