import { describe, it, expect } from "vitest";
import { vesselByHotkey, listVesselChoices, VESSEL_ORDER, vesselIndex } from "../src/core";

describe("vessel-list", () => {
  it("热键 1–5 映射五种形态", () => {
    expect(vesselByHotkey("1")).toBe("flower");
    expect(vesselByHotkey("5")).toBe("object");
    expect(vesselByHotkey("0")).toBeNull();
    expect(vesselByHotkey("x")).toBeNull();
  });

  it("选项列表长度 5 且含标签", () => {
    const list = listVesselChoices();
    expect(list).toHaveLength(5);
    expect(list[0]!.label).toBe("花");
    expect(vesselIndex("music")).toBe(3);
    expect(VESSEL_ORDER).toHaveLength(5);
  });
});
