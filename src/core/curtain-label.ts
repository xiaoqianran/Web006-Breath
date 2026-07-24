/**
 * 门帘/雨幕叙事（纯函数，可单测）
 * 与氛围 rain/evening 联动，增强开店与接待文艺感。
 */
import type { AtmosphereKind } from "./day-atmosphere";
import { atmosphereForDay } from "./day-atmosphere";

export function formatCurtainLine(day: number): string {
  const a = atmosphereForDay(day);
  switch (a.kind as AtmosphereKind) {
    case "rain":
      return "门帘沾着雨气，掀起时有一点凉，也有一点干净。";
    case "evening":
      return "向晚的门帘颜色变深，像把一天轻轻收口。";
    case "night":
      return "夜色里门帘几乎不动，只留一条缝给迟到的人。";
    case "market":
      return "晚市的风把门帘掀得高一点，脚步声也跟着进来。";
    case "lantern":
      return "灯路的光把门帘边缘染成浅金。";
    default:
      return "晴日门帘轻、透气，推开就像说一句「请进」。";
  }
}

export function formatCurtainOpenAside(queueLength: number): string {
  if (queueLength <= 0) return "门帘外暂时安静：可以整理货架，或等下一阵风。";
  if (queueLength === 1) return "门帘外有人影：一位客人等着被听见。";
  return `门帘外约有 ${queueLength} 位心情排队，一位一位接住即可。`;
}

export function formatRainStickAside(day: number): string {
  const a = atmosphereForDay(day);
  if (a.kind === "rain") return "雨声与店里的细响叠在一起，像有人在轻轻摇雨棒。";
  return "雨棒静静搁着：不必下雨，也可以想起雨的节奏。";
}

export function formatCurtainEncourage(day: number): string {
  const a = atmosphereForDay(day);
  if (a.kind === "rain" || a.kind === "night") {
    return "外面慢，门帘可以再留一条缝——迟到的温柔也要接。";
  }
  return "门帘掀起又落下：每一次都是一次小小的迎接。";
}
