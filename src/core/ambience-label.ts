/**
 * 店内氛围小物叙事（纯函数，可单测）
 * 风铃、店猫等装饰性旁白，增强文艺感。
 */
import type { AtmosphereKind } from "./day-atmosphere";
import { atmosphereForDay } from "./day-atmosphere";

export function formatWindChimeLine(day: number): string {
  const a = atmosphereForDay(day);
  switch (a.kind as AtmosphereKind) {
    case "rain":
      return "风铃被雨气沾湿，响声也变软了。";
    case "evening":
      return "傍晚的风铃拖得很长，像有人慢慢走过巷口。";
    case "night":
      return "夜色里风铃只响了一下，又静下去。";
    case "market":
      return "晚市的风把风铃碰响两次，像在点名。";
    case "lantern":
      return "灯路的风铃亮着碎光，叮一声就记住了。";
    default:
      return "晴日的风铃清脆：门帘掀起时会先笑一声。";
  }
}

export function formatShopCatLine(circulationsToday: number): string {
  if (circulationsToday <= 0) {
    return "窗台的店猫还在睡：今天的第一位客人会把它吵醒。";
  }
  if (circulationsToday < 3) {
    return "店猫睁开一只眼，又懒洋洋地蜷回去。";
  }
  return "店猫换了个姿势，像在默默给流通数拍子。";
}

export function formatAmbiencePair(day: number, circulationsToday: number): string {
  return `${formatWindChimeLine(day)} ${formatShopCatLine(circulationsToday)}`;
}

export function formatAmbienceEncourage(day: number): string {
  const a = atmosphereForDay(day);
  if (a.kind === "rain" || a.kind === "night") {
    return "外面慢，店里可以更慢——风铃与猫都允许你停一会儿。";
  }
  return "小动静也是店的呼吸：听得见，就说明你还在。";
}
