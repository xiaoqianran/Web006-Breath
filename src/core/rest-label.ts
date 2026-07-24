/**
 * 绿植与憩座叙事（纯函数，可单测）
 * 给接待处增加「可以坐一会儿」的文艺感。
 */

export function formatMintPotsLine(day: number): string {
  if (day % 3 === 0) return "薄荷叶被雨气洗得更亮，窗台有一点清香。";
  if (day % 2 === 0) return "迷迭香与薄荷并排：像两种不同的清醒。";
  return "绿植安静地长着，不催你，也不离开。";
}

export function formatRestStoolLine(queueLength: number): string {
  if (queueLength <= 0) return "憩座空着：你可以先坐一会儿，再等门铃。";
  if (queueLength === 1) return "憩座旁站着一位客人：先请坐，再慢慢说。";
  return `憩座不够坐 ${queueLength} 位——没关系，站着也可以被接住。`;
}

export function formatRestEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "坐下、深呼吸：第一位客人会来。";
  if (circulationsToday < 3) return "忙里偷闲也是温柔：绿植记得你的节奏。";
  return "流通了几回，也记得给自己留一张椅子。";
}

export function formatHerbAside(warmth: number): string {
  if (warmth <= 0) return "草叶还凉：等店里的暖意起来。";
  if (warmth < 12) return "草香混着茶香，店开始像「在了」。";
  return "绿意与暖意同在：来的人会先闻到，再说话。";
}
