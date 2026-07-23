import { describe, it, expect } from "vitest";
import { getDayEvent, applyDayEventToQueue } from "../src/core";
import { freshDayQueue, describeDayOpener } from "../src/data/emotions";

describe("day events", () => {
  it("第 1 日无特供事件", () => {
    expect(getDayEvent(1)).toBeNull();
    expect(freshDayQueue(1)).toHaveLength(4);
  });

  it("第 2 日队列头部为特供客人", () => {
    const event = getDayEvent(2);
    expect(event).not.toBeNull();
    expect(event!.bonusGuest).toBeDefined();
    const q = freshDayQueue(2);
    expect(q.length).toBe(5);
    expect(q[0]!.guestName).toBe(event!.bonusGuest!.guestName);
    expect(describeDayOpener(2)).toContain(event!.title);
  });

  it("applyDayEventToQueue 不修改无事件日", () => {
    const base = [{ id: "a", guestName: "A", text: "x", tags: ["安心" as const], intensity: 1 }];
    const { queue, event } = applyDayEventToQueue(1, base);
    expect(event).toBeNull();
    expect(queue).toHaveLength(1);
  });
});
