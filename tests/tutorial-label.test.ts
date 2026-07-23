import { describe, it, expect } from "vitest";
import {
  TUTORIAL_STEPS,
  formatTutorialStepLine,
  listTutorialStepLines,
  formatTutorialFooter,
  formatTutorialWelcome,
} from "../src/core";

describe("tutorial-label", () => {
  it("四步教程文案齐全", () => {
    expect(TUTORIAL_STEPS.length).toBe(4);
    expect(listTutorialStepLines().length).toBe(4);
    expect(formatTutorialStepLine(TUTORIAL_STEPS[0]!, 0)).toContain("接待");
    expect(formatTutorialFooter()).toContain("温柔");
    expect(formatTutorialWelcome()).toContain("一息");
  });
});
