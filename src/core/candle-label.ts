/**
 * 烛火与祈愿签叙事（纯函数，可单测）
 * 温存比作烛火；流通次数比作梁上祈愿签。
 */

export function candleFlameTitle(warmth: number): string {
  if (warmth >= 40) return "长明烛";
  if (warmth >= 24) return "炉烛稳";
  if (warmth >= 12) return "掌心烛";
  if (warmth >= 5) return "初燃";
  if (warmth > 0) return "星火";
  return "待燃";
}

export function formatCandleLine(warmth: number): string {
  return `烛火 · ${candleFlameTitle(warmth)}（温存 ${warmth}）`;
}

export function formatCandleAside(warmth: number): string {
  if (warmth <= 0) return "柜台烛芯还冷：第一缕流通会把它点着。";
  if (warmth < 12) return "烛火刚稳：再接住几份心情，光会更亮。";
  if (warmth < 24) return "烛火照着托盘与货架：来往的人都能被看见。";
  return "烛火长明：即使打烊，余温也在。";
}

/** 梁上祈愿签：用流通次数做文艺计数 */
export function formatWishTagLine(historyCount: number): string {
  if (historyCount <= 0) return "梁上还没有祈愿签：流通后会挂上第一片。";
  if (historyCount === 1) return "第一片祈愿签晃了晃：有人被接住了。";
  if (historyCount < 20) return `梁上已有 ${historyCount} 片祈愿签，风一过就轻响。`;
  return `逾 ${historyCount} 片祈愿签：整根梁都写满温柔。`;
}

export function formatWishHangAside(actionGift: boolean): string {
  if (actionGift) return "赠予像把祈愿签亲手递出，不必挂着等风。";
  return "上架像把祈愿签挂上梁：等知音来解下。";
}

export function formatCandleWishPair(warmth: number, historyCount: number): string {
  return `${formatCandleLine(warmth)}；${formatWishTagLine(historyCount)}`;
}
