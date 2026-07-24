/**
 * 印鉴/纪念叙事（纯函数，可单测）
 * 把品质与流通次数比作盖章，增强仪式感。
 */
import type { Quality } from "./types";
import { QUALITY_LABELS } from "./types";

export function formatSealForQuality(quality: Quality): string {
  const q = QUALITY_LABELS[quality];
  if (quality === "rare") return `朱砂印 · 「${q}」——心口盖下，久久不褪。`;
  if (quality === "fine") return `细印 · 「${q}」——字迹端正，轻轻一压。`;
  return `素印 · 「${q}」——不求浓墨，只求真。`;
}

export function formatSealCountAside(historyCount: number): string {
  if (historyCount <= 0) return "印泥还是新的：第一枚章会在流通后落下。";
  if (historyCount < 10) return `已落 ${historyCount} 枚温柔印记，印泥仍温。`;
  if (historyCount < 50) return `印鉴簿上 ${historyCount} 枚：日子被一枚一枚接住。`;
  return `逾 ${historyCount} 枚印记：这间店已写满许多温柔的名字。`;
}

export function formatMilestoneSeal(day: number, historyCount: number): string {
  if (day >= 100 || historyCount >= 100) {
    return "百枚纪念：可以轻轻笑一下——温柔已经走了很远。";
  }
  if (day >= 90 || historyCount >= 50) {
    return "将近百日/百次：印鉴簿快要翻到更厚的一页。";
  }
  if (day >= 50) return "半百已过：章还在，心也在。";
  return "纪念慢慢攒：不必催，印会自己满。";
}

export function formatSealEncourage(quality: Quality): string {
  if (quality === "rare") return "珍稀一印：今天值得被好好记得。";
  if (quality === "fine") return "精致一印：细心成器，已经很好。";
  return "素简一印：轻也真实，够了。";
}
