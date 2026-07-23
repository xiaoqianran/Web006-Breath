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
  {
    day: 6,
    title: "风铃周",
    opener: "第六日。风铃被路过的猫碰响了两次。",
    sampleIndexes: [14, 15, 1, 6],
    goalCirculations: 4,
    goalWarmth: 16,
  },
  {
    day: 7,
    title: "半满货架",
    opener: "第七日。货架空了一半，像在等人来填满。",
    sampleIndexes: [16, 17, 3, 8],
    goalCirculations: 4,
    goalWarmth: 18,
  },
  {
    day: 8,
    title: "回信日",
    opener: "第八日。有人把感谢写在杯垫背面。",
    sampleIndexes: [2, 7, 12, 15],
    goalCirculations: 5,
    goalWarmth: 18,
  },
  {
    day: 9,
    title: "薄雾",
    opener: "第九日。雾让橱窗上的字迹晕开一点。",
    sampleIndexes: [4, 9, 14, 17],
    goalCirculations: 5,
    goalWarmth: 20,
  },
  {
    day: 10,
    title: "十日小结",
    opener: "第十日。像一本手账翻到中页，还想继续写。",
    sampleIndexes: [0, 8, 11, 16],
    goalCirculations: 5,
    goalWarmth: 20,
  },
  {
    day: 11,
    title: "新芽",
    opener: "第十一日。窗台缝里冒出一点绿。",
    sampleIndexes: [1, 9, 15, 17],
    goalCirculations: 5,
    goalWarmth: 20,
  },
  {
    day: 12,
    title: "旧歌",
    opener: "第十二日。不知谁哼了一句很久以前的歌。",
    sampleIndexes: [3, 6, 12, 14],
    goalCirculations: 5,
    goalWarmth: 22,
  },
  {
    day: 13,
    title: "纸船",
    opener: "第十三日。有人把愿望折成纸船放在柜台。",
    sampleIndexes: [2, 5, 10, 16],
    goalCirculations: 5,
    goalWarmth: 22,
  },
  {
    day: 14,
    title: "双周",
    opener: "第十四日。两周的铃铛声叠在一起。",
    sampleIndexes: [0, 4, 8, 13],
    goalCirculations: 5,
    goalWarmth: 24,
  },
  {
    day: 15,
    title: "十五的月亮",
    opener: "第十五日。月亮不必圆满，店灯也够用。",
    sampleIndexes: [7, 11, 14, 17],
    goalCirculations: 5,
    goalWarmth: 24,
  },
  {
    day: 16,
    title: "薄荷再绿",
    opener: "第十六日。薄荷又冒了新芽，像不愿结束。",
    sampleIndexes: [18, 20, 22, 35],
    goalCirculations: 5,
    goalWarmth: 24,
  },
  {
    day: 17,
    title: "晚班铃",
    opener: "第十七日。晚一点的铃更轻，像怕惊醒谁。",
    sampleIndexes: [19, 24, 30, 41],
    goalCirculations: 5,
    goalWarmth: 26,
  },
  {
    day: 18,
    title: "十八的窗口",
    opener: "第十八日。窗口的光拉得很长，够写下一封短笺。",
    sampleIndexes: [21, 28, 33, 39],
    goalCirculations: 5,
    goalWarmth: 26,
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
