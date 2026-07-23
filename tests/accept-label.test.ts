import { describe, it, expect } from "vitest";
import {
  formatAcceptButtonLabel,
  formatAcceptEmptyHint,
  formatAcceptReadyHint,
  formatAcceptAriaLabel,
} from "../src/core";

describe("accept-label", () => {
  it("空队列与有客文案不同", () => {
    expect(formatAcceptButtonLabel(0)).toBe("暂无客人");
    expect(formatAcceptButtonLabel(1)).toBe("接待下一位");
    expect(formatAcceptButtonLabel(3)).toContain("3");
    expect(formatAcceptEmptyHint()).toContain("安静");
    expect(formatAcceptReadyHint(2)).toContain("2");
    expect(formatAcceptAriaLabel(0)).toContain("暂无");
    expect(formatAcceptAriaLabel(4)).toContain("4");
  });
});
