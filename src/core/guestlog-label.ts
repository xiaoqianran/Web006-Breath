/**
 * 访客签到本与软橡皮叙事（纯函数，可单测）
 * 名字轻轻落在纸上：不是点名，是「我来过，也可以改」。
 */

export function formatGuestLogLine(day: number): string {
  if (day % 3 === 0) return "签到本翻开新页：纸面还留着一点空白的客气。";
  if (day % 2 === 0) return "本很薄：只记来过，不记对错。";
  return "签到本安静：专门给愿意留下一笔轻轻名字的人。";
}

export function formatSoftEraserLine(warmth: number): string {
  if (warmth <= 0) return "软橡皮还新：等第一份温存再擦第一处。";
  if (warmth < 12) return "橡皮边起了毛：像允许改口，也允许重写。";
  if (warmth < 24) return "软橡皮放在本角：像店说「写错了也没关系」。";
  return "擦与温存同轻：改过了，也不伤纸的心。";
}

export function formatGuestlogAside(historyCount: number): string {
  if (historyCount <= 0) return "本还空白：第一笔流通会留下第一个名字。";
  if (historyCount < 20) return `约记过 ${historyCount} 个来访：每一个都是愿意被轻轻记住的许可。`;
  return `逾 ${historyCount} 个名字：页边叠着被温柔允许过的改写。`;
}

export function formatGuestlogEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好签到本与橡皮：今天从愿意留下一笔开始。";
  if (circulationsToday < 3) return "翻本、落笔、可改：流通也是一种轻轻的到场。";
  return "忙完把橡皮放回本角——记完了，人也要松一松腕。";
}

export function formatGuestlogPair(day: number, warmth: number): string {
  return `${formatGuestLogLine(day)} ${formatSoftEraserLine(warmth)}`;
}
