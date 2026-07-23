/**
 * 日氛围叙事（纯函数，可单测）
 * 按日序号轮转天气/时刻气质，供 HUD 与打烊页使用。
 */

export type AtmosphereKind =
  | "clear"
  | "rain"
  | "evening"
  | "market"
  | "lantern"
  | "night";

export interface DayAtmosphere {
  kind: AtmosphereKind;
  title: string;
  line: string;
  /** CSS data-atmosphere 钩子 */
  dataAttr: string;
}

const TABLE: DayAtmosphere[] = [
  {
    kind: "clear",
    title: "晴窗",
    line: "阳光落在柜台上，灰尘像慢动作的星星。",
    dataAttr: "clear",
  },
  {
    kind: "rain",
    title: "雨巷",
    line: "雨丝贴着玻璃，店里适合慢慢听人说话。",
    dataAttr: "rain",
  },
  {
    kind: "evening",
    title: "傍晚",
    line: "天色变软，门铃的声音也变长了一点。",
    dataAttr: "evening",
  },
  {
    kind: "market",
    title: "晚市",
    line: "巷口有人收摊，路过的情绪却更密了。",
    dataAttr: "market",
  },
  {
    kind: "lantern",
    title: "灯路",
    line: "灯一盏一盏亮起来，像有人在给路写注脚。",
    dataAttr: "lantern",
  },
  {
    kind: "night",
    title: "夜窗",
    line: "夜色贴着窗，温存罐里的光更明显了。",
    dataAttr: "night",
  },
];

/** 第 day 日的氛围（day 从 1 起） */
export function atmosphereForDay(day: number): DayAtmosphere {
  const d = Math.max(1, Math.floor(day));
  return TABLE[(d - 1) % TABLE.length]!;
}

export function formatAtmosphereLine(day: number): string {
  const a = atmosphereForDay(day);
  return `今日氛围 · ${a.title}：${a.line}`;
}

export function formatAtmosphereShort(day: number): string {
  const a = atmosphereForDay(day);
  return `${a.title}`;
}

/** 打烊时沿用当日氛围的收束补一句 */
export function formatAtmosphereClosing(day: number): string {
  const a = atmosphereForDay(day);
  switch (a.kind) {
    case "rain":
      return "雨还在，门帘可以再留一条缝给迟到的人。";
    case "night":
      return "夜深了，把灯拧到刚好看见温存罐就好。";
    case "evening":
      return "傍晚收尾，货架上的影子也温柔起来。";
    case "market":
      return "晚市散了，店里的安静反而更完整。";
    case "lantern":
      return "灯路还亮着，明天的脚步会找得到门。";
    default:
      return "晴窗可以合上，暖意留在柜台。";
  }
}

/** 氛围对形态选择的温和建议（非强制） */
export function formatAtmosphereCraftHint(day: number): string {
  const a = atmosphereForDay(day);
  switch (a.kind) {
    case "rain":
      return "雨日适合茶与小物件：温热、可握在掌心。";
    case "night":
      return "夜色里音乐与画更贴——把说不出口的先托住。";
    case "evening":
      return "傍晚适合花与音乐：慢一点，让影子也温柔。";
    case "market":
      return "晚市脚步密，小物件与茶更容易被带走。";
    case "lantern":
      return "灯路亮着，花与画像会替你指路。";
    default:
      return "晴窗下五种形态都顺：随心选择即可。";
  }
}

/** 日标题行：剧本名 + 氛围短称 */
export function formatDayHeaderLine(day: number, scriptTitle: string): string {
  return `第 ${day} 日 · ${scriptTitle} · ${formatAtmosphereShort(day)}`;
}
