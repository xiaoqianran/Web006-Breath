import { describe, it, expect } from "vitest";
import { phaseLabel } from "../src/core";

describe("phaseLabel", () => {
  it("覆盖全部阶段中文名", () => {
    expect(phaseLabel("awaiting_emotion")).toBe("等候接待");
    expect(phaseLabel("awaiting_vessel")).toBe("选择容器");
    expect(phaseLabel("awaiting_circulation")).toBe("完成流通");
    expect(phaseLabel("result")).toBe("流通结果");
    expect(phaseLabel("day_complete")).toBe("今日打烊");
  });
});
