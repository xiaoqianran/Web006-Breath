import type { Emotion, EmotionTag } from "./types";

export interface DayEvent {
  id: string;
  day: number;
  title: string;
  description: string;
  /** 追加到当日队列头部的特殊客人 */
  bonusGuest?: Emotion;
  warmthBonusOnComplete?: number;
}

const SPECIAL: Emotion[] = [
  {
    id: "special_rain",
    guestName: "雨中的人",
    text: "伞借给了陌生人，自己湿了一路，却莫名轻松。",
    tags: ["释然", "温柔"],
    intensity: 4,
  },
  {
    id: "special_letter",
    guestName: "迟来的信",
    text: "信封边角都软了，字迹还停在三年前。",
    tags: ["想念", "遗憾"],
    intensity: 5,
  },
  {
    id: "special_dawn",
    guestName: "赶早班的人",
    text: "天还没亮透，面包店已经亮了灯。",
    tags: ["疲惫", "期待"],
    intensity: 3,
  },
];

/** 根据日期返回可选日事件（纯函数） */
export function getDayEvent(day: number): DayEvent | null {
  if (day <= 1) return null;
  const idx = (day - 2) % SPECIAL.length;
  const guest = SPECIAL[idx];
  if (!guest) return null;
  return {
    id: `event_day_${day}`,
    day,
    title: ["雨后特供", "旧信专柜", "黎明加场"][idx] ?? "今日特供",
    description: "一位不在常规名单里的客人推开了门。",
    bonusGuest: {
      ...guest,
      id: `${guest.id}_d${day}`,
    },
    warmthBonusOnComplete: 1,
  };
}

/** 将日事件合并进队列 */
export function applyDayEventToQueue(day: number, queue: Emotion[]): {
  queue: Emotion[];
  event: DayEvent | null;
} {
  const event = getDayEvent(day);
  if (!event?.bonusGuest) return { queue, event: null };
  return { queue: [event.bonusGuest, ...queue], event };
}

export function tagsUnion(tags: EmotionTag[]): string {
  return tags.join("、");
}
