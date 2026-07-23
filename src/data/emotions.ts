import type { Emotion } from "../core/types";
import { applyDayEventToQueue } from "../core/events";
import { getDayScript, queueFromDayScript } from "./day-scripts";

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
  {
    id: "e09",
    guestName: "迟",
    text: "把耳机音量拧小，好像就能听见自己了。",
    tags: ["孤独", "温柔"],
    intensity: 3,
  },
  {
    id: "e10",
    guestName: "匿名",
    text: "和好了，但不知道该不该庆祝。",
    tags: ["释然", "悸动"],
    intensity: 4,
  },
  {
    id: "e11",
    guestName: "青",
    text: "阳台上的薄荷又活了，我浇多了水。",
    tags: ["安心", "温柔"],
    intensity: 2,
  },
  {
    id: "e12",
    guestName: "墨",
    text: "梦里把未完成的话说完了，醒来还是空的。",
    tags: ["遗憾", "想念"],
    intensity: 5,
  },
  {
    id: "e13",
    guestName: "可",
    text: "第一次一个人看展，原来也可以站很久。",
    tags: ["勇气", "期待"],
    intensity: 3,
  },
  {
    id: "e14",
    guestName: "匿名",
    text: "熬夜改完稿，窗外已经发白。",
    tags: ["疲惫", "释然"],
    intensity: 4,
  },
  {
    id: "e15",
    guestName: "夏",
    text: "把耳机分给邻座一半，歌突然变得客气起来。",
    tags: ["温柔", "悸动"],
    intensity: 3,
  },
  {
    id: "e16",
    guestName: "匿名",
    text: "电梯里两个人都假装看手机楼层。",
    tags: ["孤独", "期待"],
    intensity: 2,
  },
  {
    id: "e17",
    guestName: "北",
    text: "终于把那盆养死的绿萝换成了多肉。",
    tags: ["释然", "勇气"],
    intensity: 3,
  },
  {
    id: "e18",
    guestName: "言",
    text: "想写长信，最后只发出一个句号。",
    tags: ["遗憾", "想念"],
    intensity: 4,
  },
  {
    id: "e19",
    guestName: "安",
    text: "把钥匙放回原处，门却自己轻轻合上了。",
    tags: ["安心", "温柔"],
    intensity: 2,
  },
  {
    id: "e20",
    guestName: "匿名",
    text: "会议室的空调太冷，手心里却在出汗。",
    tags: ["疲惫", "勇气"],
    intensity: 3,
  },
  {
    id: "e21",
    guestName: "程",
    text: "她说下次见，把下次说得很轻。",
    tags: ["期待", "遗憾"],
    intensity: 4,
  },
  {
    id: "e22",
    guestName: "白",
    text: "夜班结束，豆浆店的灯比月亮近。",
    tags: ["孤独", "释然"],
    intensity: 3,
  },
  {
    id: "e23",
    guestName: "禾",
    text: "把旧照片扫进硬盘，文件名却不敢改。",
    tags: ["想念", "勇气"],
    intensity: 4,
  },
  {
    id: "e24",
    guestName: "匿名",
    text: "公交到站铃响了三次，我才发现到了。",
    tags: ["悸动", "疲惫"],
    intensity: 2,
  },
  {
    id: "e25",
    guestName: "晴",
    text: "把伞借给了别人，自己走在雨停之后的光里。",
    tags: ["温柔", "释然"],
    intensity: 3,
  },
  {
    id: "e26",
    guestName: "匿名",
    text: "耳机没电了，才听见风穿过树叶。",
    tags: ["孤独", "安心"],
    intensity: 2,
  },
  {
    id: "e27",
    guestName: "疏",
    text: "把未读消息标成已读，心却空了一下。",
    tags: ["遗憾", "孤独"],
    intensity: 4,
  },
  {
    id: "e28",
    guestName: "满",
    text: "冰箱里只剩半颗柠檬，仍想做一杯水。",
    tags: ["疲惫", "勇气"],
    intensity: 3,
  },
  {
    id: "e29",
    guestName: "汀",
    text: "把信纸叠好，贴上不存在的邮票。",
    tags: ["想念", "期待"],
    intensity: 3,
  },
  {
    id: "e30",
    guestName: "匿名",
    text: "电梯门开合之间，有人说了句加油。",
    tags: ["勇气", "温柔"],
    intensity: 2,
  },
  {
    id: "e31",
    guestName: "澄",
    text: "把闹钟拨后五分钟，却比平时更清醒。",
    tags: ["释然", "期待"],
    intensity: 2,
  },
  {
    id: "e32",
    guestName: "匿名",
    text: "雨刷停了，玻璃上还停着半句未说完的话。",
    tags: ["遗憾", "温柔"],
    intensity: 4,
  },
];



export function freshDayQueue(day: number = 1): Emotion[] {
  return queueFromDayScript(day);
}

export function describeDayOpener(day: number): string {
  const script = getDayScript(day);
  const { event } = applyDayEventToQueue(day, []);
  if (!event) return `${script.opener}（${script.title}）`;
  return `${script.opener} · ${event.title}：${event.description}`;
}

export function goalsForDay(day: number): { dayGoalCirculations: number; dayGoalWarmth: number } {
  const s = getDayScript(day);
  return { dayGoalCirculations: s.goalCirculations, dayGoalWarmth: s.goalWarmth };
}
