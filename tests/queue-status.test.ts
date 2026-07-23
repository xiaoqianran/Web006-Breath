import { describe, it, expect } from "vitest";
import { createGameState, formatQueueStatus, hasWaitingGuests } from "../src/core";
import { SAMPLE_EMOTIONS } from "../src/data/emotions";

describe("queue status", () => {
  it("空队列与有客文案", () => {
    const empty = createGameState([]);
    expect(hasWaitingGuests(empty)).toBe(false);
    expect(formatQueueStatus(empty)).toContain("暂无");
    const full = createGameState(SAMPLE_EMOTIONS.slice(0, 3));
    expect(hasWaitingGuests(full)).toBe(true);
    expect(formatQueueStatus(full)).toContain("3");
    const one = createGameState(SAMPLE_EMOTIONS.slice(0, 1));
    expect(formatQueueStatus(one)).toContain("一位");
  });
});
