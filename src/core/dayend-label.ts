/**
 * 钥匙浅盘与关店小灯叙事（纯函数，可单测）
 * 一日收尾：不是落锁本身，是「把店的温柔也收好」。
 */

export function formatKeyTrayLine(day: number): string {
  if (day % 3 === 0) return "钥匙浅盘端稳：金属还带着掌心的凉。";
  if (day % 2 === 0) return "盘很浅：只放今日的钥匙，不放明日的催促。";
  return "浅盘安静：专门给愿意把一天轻轻收起的人。";
}

export function formatClosingLampLine(warmth: number): string {
  if (warmth <= 0) return "关店小灯还暗：等第一份温存再留最后一盏。";
  if (warmth < 12) return "灯火微黄：像店在窗里轻轻点个头。";
  if (warmth < 24) return "小灯拧到最柔：像说「明天还在」。";
  return "灯与温存同柔：关了门，也不关心里的一点亮。";
}

export function formatDayendAside(historyCount: number): string {
  if (historyCount <= 0) return "钥匙还没放回：第一笔流通会留下第一日的收尾。";
  if (historyCount < 20) return `约收过 ${historyCount} 次店门：每一次都是愿意把温柔放回原位的许可。`;
  return `逾 ${historyCount} 次落锁：盘里叠着被温柔结束过的白昼。`;
}

export function formatDayendEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好钥匙与小灯：今天从愿意温柔地收尾开始。";
  if (circulationsToday < 3) return "放钥、调灯、落锁：流通也是一种轻轻的结束。";
  return "忙完把小灯拧柔——收完了，人也要松一松肩。";
}

export function formatDayendPair(day: number, warmth: number): string {
  return `${formatKeyTrayLine(day)} ${formatClosingLampLine(warmth)}`;
}
