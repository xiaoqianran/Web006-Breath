/**
 * 月相叙事（纯函数，可单测）
 * 按日序号轮转月相，供 HUD / 打烊页文艺展示。
 */

export type MoonPhase =
  | "new"
  | "waxing_crescent"
  | "first_quarter"
  | "waxing_gibbous"
  | "full"
  | "waning_gibbous"
  | "last_quarter"
  | "waning_crescent";

export interface MoonInfo {
  phase: MoonPhase;
  title: string;
  line: string;
}

const PHASES: MoonInfo[] = [
  {
    phase: "new",
    title: "朔月",
    line: "天几乎无光，店里的灯反而更温柔。",
  },
  {
    phase: "waxing_crescent",
    title: "蛾眉月",
    line: "细细一弯，像有人刚把心事写开头。",
  },
  {
    phase: "first_quarter",
    title: "上弦",
    line: "半明半暗，适合把犹豫慢慢摊开。",
  },
  {
    phase: "waxing_gibbous",
    title: "盈凸",
    line: "光在长大，货架上的影子也柔和起来。",
  },
  {
    phase: "full",
    title: "满月",
    line: "满满一盘光，街角与店门都被记得。",
  },
  {
    phase: "waning_gibbous",
    title: "亏凸",
    line: "光开始慢慢交还，适合收尾与道谢。",
  },
  {
    phase: "last_quarter",
    title: "下弦",
    line: "另一半安静下来，门铃声更清晰。",
  },
  {
    phase: "waning_crescent",
    title: "残月",
    line: "只剩一缕，像把未说完的话折好。",
  },
];

/** 第 day 日的月相（day 从 1 起） */
export function moonForDay(day: number): MoonInfo {
  const d = Math.max(1, Math.floor(day));
  return PHASES[(d - 1) % PHASES.length]!;
}

export function formatMoonLine(day: number): string {
  const m = moonForDay(day);
  return `月相 · ${m.title}：${m.line}`;
}

export function formatMoonShort(day: number): string {
  return moonForDay(day).title;
}

/** 月相对流通的温和旁白（非玩法强制） */
export function formatMoonCraftAside(day: number): string {
  const m = moonForDay(day);
  switch (m.phase) {
    case "new":
      return "朔月宜素简：轻轻成器也够亮。";
    case "full":
      return "满月宜珍藏一念：细心匹配会更贴。";
    case "waxing_crescent":
    case "waxing_gibbous":
      return "月在盈：适合把心情再托稳一点。";
    case "waning_gibbous":
    case "waning_crescent":
      return "月在亏：赠予往往比上架更贴这一夜。";
    default:
      return "半明半暗：上架或赠予，都随心即可。";
  }
}

export function formatMoonClosing(day: number): string {
  const m = moonForDay(day);
  if (m.phase === "full") return "满月打烊：把门帘放下，光会替你守一夜。";
  if (m.phase === "new") return "朔月打烊：灯拧到最暗，明天再点。";
  return `${m.title}下打烊：余光还在，心可以歇了。`;
}
