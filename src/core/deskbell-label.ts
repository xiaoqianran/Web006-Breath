/**
 * 柜台黄铜铃与毡槌叙事（纯函数，可单测）
 * 轻敲一下：不是催促排队，是「让到来也被温柔地报一声」。
 * 与 timerbell / welcome 门铃区分命名。
 */

export function formatBrassDeskBellLine(day: number): string {
  if (day % 3 === 0) return "黄铜铃静放：罩面还映着一点暖的金。";
  if (day % 2 === 0) return "铃很轻：只报一声，不催人。";
  return "柜台铃安静：专门给愿意把到来也轻轻报一声的人。";
}

export function formatFeltMalletLine(warmth: number): string {
  if (warmth <= 0) return "毡槌还搁着：等第一份温存再敲第一下。";
  if (warmth < 12) return "槌头微软：像轻轻说「敲一下就好」。";
  if (warmth < 24) return "毡槌点上铃罩：像店把新客也温柔地报进门。";
  return "槌与温存同软：敲到了，也不刺耳。";
}

export function formatDeskbellAside(historyCount: number): string {
  if (historyCount <= 0) return "铃还静着：第一笔流通会留下第一声被报过的到。";
  if (historyCount < 20) return `约敲过 ${historyCount} 次：每一次都是愿意被温柔迎接的许可。`;
  return `逾 ${historyCount} 次轻敲：罩沿叠着被温柔报过的声。`;
}

export function formatDeskbellEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好黄铜铃与毡槌：今天从愿意报一声到开始。";
  if (circulationsToday < 3) return "取槌、轻敲、归位：流通也是一种轻轻的报喜。";
  return "忙完把槌放回——敲完了，人也要松一松肩。";
}

export function formatDeskbellPair(day: number, warmth: number): string {
  return `${formatBrassDeskBellLine(day)} ${formatFeltMalletLine(warmth)}`;
}
