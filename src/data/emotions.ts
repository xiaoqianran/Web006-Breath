import type { Emotion } from "../core/types";

/** 演示用样本情绪（至少支撑一日循环） */
export const SAMPLE_EMOTIONS: Emotion[] = [
  {
    id: "e01",
    guestName: "阿初",
    text: "有句话在嘴边转了三天，还是没发出去。",
    tags: ["想念", "遗憾"],
    intensity: 3,
  },
  {
    id: "e02",
    guestName: "匿名",
    text: "下班地铁里突然想哭，又觉得没什么大事。",
    tags: ["疲惫", "孤独"],
    intensity: 4,
  },
  {
    id: "e03",
    guestName: "小满",
    text: "雨停的时候，世界好像被轻轻擦过。",
    tags: ["释然", "温柔"],
    intensity: 2,
  },
  {
    id: "e04",
    guestName: "林",
    text: "收到一封迟来的信，心跳快了一拍。",
    tags: ["悸动", "期待"],
    intensity: 4,
  },
  {
    id: "e05",
    guestName: "周周",
    text: "把旧衣服叠好，终于把那间房还回去了。",
    tags: ["释然", "勇气"],
    intensity: 3,
  },
  {
    id: "e06",
    guestName: "南",
    text: "想被记得，又怕被记得得太清楚。",
    tags: ["想念", "安心"],
    intensity: 5,
  },
  {
    id: "e07",
    guestName: "匿名",
    text: "一个人吃饭其实还可以，就是汤有点咸。",
    tags: ["孤独", "安心"],
    intensity: 2,
  },
  {
    id: "e08",
    guestName: "禾",
    text: "明天要去很远的地方，行李箱还空着。",
    tags: ["期待", "勇气"],
    intensity: 3,
  },
];

export function freshDayQueue(day: number = 1): Emotion[] {
  // 简单轮转：按日偏移取样 4 条
  const offset = ((day - 1) * 2) % SAMPLE_EMOTIONS.length;
  const count = 4;
  const result: Emotion[] = [];
  for (let i = 0; i < count; i++) {
    const src = SAMPLE_EMOTIONS[(offset + i) % SAMPLE_EMOTIONS.length];
    if (!src) continue;
    result.push({
      ...src,
      id: `${src.id}_d${day}_${i}`,
    });
  }
  return result;
}
