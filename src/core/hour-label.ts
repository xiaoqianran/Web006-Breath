/**
 * 店内时辰叙事（纯函数，可单测）
 * 按日序号映射「一日内」时辰气质，与氛围/月相互补。
 */

export type ShopHour =
  | "dawn"
  | "morning"
  | "noon"
  | "afternoon"
  | "dusk"
  | "evening"
  | "night"
  | "late";

export interface HourInfo {
  hour: ShopHour;
  title: string;
  line: string;
}

const HOURS: HourInfo[] = [
  {
    hour: "dawn",
    title: "破晓",
    line: "第一缕光还淡，钥匙声特别清楚。",
  },
  {
    hour: "morning",
    title: "午前",
    line: "茶香刚起，适合慢慢接待。",
  },
  {
    hour: "noon",
    title: "正午",
    line: "光最直，货架上的影子也最短。",
  },
  {
    hour: "afternoon",
    title: "午后",
    line: "时间变软，门铃拖得很长。",
  },
  {
    hour: "dusk",
    title: "向晚",
    line: "天色交班，灯先亮半寸。",
  },
  {
    hour: "evening",
    title: "入夜",
    line: "巷口脚步密，店里反而更静。",
  },
  {
    hour: "night",
    title: "夜深",
    line: "温存罐的光更显眼，适合收束。",
  },
  {
    hour: "late",
    title: "将歇",
    line: "几乎只剩风铃，可以准备打烊。",
  },
];

export function hourForDay(day: number): HourInfo {
  const d = Math.max(1, Math.floor(day));
  return HOURS[(d - 1) % HOURS.length]!;
}

export function formatHourLine(day: number): string {
  const h = hourForDay(day);
  return `店内时辰 · ${h.title}：${h.line}`;
}

export function formatHourShort(day: number): string {
  return hourForDay(day).title;
}

export function formatHourCraftAside(day: number): string {
  const h = hourForDay(day);
  switch (h.hour) {
    case "dawn":
    case "morning":
      return "午前宜茶与花：温热、朝光。";
    case "noon":
    case "afternoon":
      return "午后宜画与音乐：把说不出口的摊开。";
    case "dusk":
    case "evening":
      return "向晚宜小物件与赠予：让温柔先到家。";
    default:
      return "夜深宜细心匹配：或直接赠予，不必久等。";
  }
}

export function formatHourglassAside(circulationsToday: number): string {
  if (circulationsToday <= 0) return "沙漏还没翻面：第一位客人会让时间开始流。";
  if (circulationsToday < 3) return "沙漏上半还多：今天还早，可以从容。";
  return "沙漏下半渐满：今天的温柔已经攒了不少。";
}
