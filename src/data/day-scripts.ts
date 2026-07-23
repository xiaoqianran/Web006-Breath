import type { Emotion } from "../core/types";
import { SAMPLE_EMOTIONS } from "./emotions";
import { applyDayEventToQueue } from "../core/events";

export interface DayScript {
  day: number;
  title: string;
  opener: string;
  /** 相对 SAMPLE 的下标选取 */
  sampleIndexes: number[];
  goalCirculations: number;
  goalWarmth: number;
}

/** 前 5 日剧本（毕业演示用短篇） */
export const DAY_SCRIPTS: DayScript[] = [
  {
    day: 1,
    title: "开张的午后",
    opener: "第一日。门帘还带着晒过的味道。",
    sampleIndexes: [0, 1, 2, 3],
    goalCirculations: 3,
    goalWarmth: 8,
  },
  {
    day: 2,
    title: "雨后",
    opener: "第二日。地上有未干的脚印，像谁匆匆来过。",
    sampleIndexes: [4, 5, 6, 7],
    goalCirculations: 3,
    goalWarmth: 10,
  },
  {
    day: 3,
    title: "旧信",
    opener: "第三日。信箱里多了一封没有地址的纸。",
    sampleIndexes: [8, 9, 10, 1],
    goalCirculations: 4,
    goalWarmth: 12,
  },
  {
    day: 4,
    title: "薄荷与行李",
    opener: "第四日。阳台上的薄荷香混进了店里。",
    sampleIndexes: [11, 12, 13, 2],
    goalCirculations: 4,
    goalWarmth: 14,
  },
  {
    day: 5,
    title: "五日小聚",
    opener: "第五日。像有人约好了，把未说完的话都送来。",
    sampleIndexes: [0, 5, 10, 13],
    goalCirculations: 4,
    goalWarmth: 16,
  },
];

export function getDayScript(day: number): DayScript {
  const found = DAY_SCRIPTS.find((d) => d.day === day);
  if (found) return found;
  // 循环延展
  const base = DAY_SCRIPTS[(day - 1) % DAY_SCRIPTS.length]!;
  return {
    ...base,
    day,
    title: `${base.title}·续`,
    opener: `第 ${day} 日。熟悉的铃铛又响了一下。`,
  };
}

export function queueFromDayScript(day: number): Emotion[] {
  const script = getDayScript(day);
  const queue: Emotion[] = [];
  script.sampleIndexes.forEach((idx, i) => {
    const src = SAMPLE_EMOTIONS[idx % SAMPLE_EMOTIONS.length];
    if (!src) return;
    queue.push({
      ...src,
      id: `${src.id}_script_d${day}_${i}`,
    });
  });
  return applyDayEventToQueue(day, queue).queue;
}
