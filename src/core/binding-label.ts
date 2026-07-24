/**
 * 装订线与穿线针叙事（纯函数，可单测）
 * 页与页要被串起来：线穿过孔，故事才成一本。
 */

export function formatBindingThreadLine(day: number): string {
  if (day % 3 === 0) return "装订线换了米白：穿过书脊时像一条安静的河。";
  if (day % 2 === 0) return "线蜡过了一遍：抽拉更顺，也不易起毛。";
  return "装订线卷着：下一本瞬间册会从这里被串起。";
}

export function formatSewingNeedleLine(warmth: number): string {
  if (warmth <= 0) return "穿线针还凉：等第一份温存再穿第一孔。";
  if (warmth < 12) return "针眼刚穿好线：第一针会决定整本的松紧。";
  if (warmth < 24) return "针在页间进出：像把散开的句子轻轻缝住。";
  return "针与温存同在：缝紧了，也仍留着翻页的缝。";
}

export function formatBindingAside(historyCount: number): string {
  if (historyCount <= 0) return "线还没穿过：第一本装订好的瞬间会先要一根线。";
  if (historyCount < 20) return `约缝过 ${historyCount} 本小册：每本都是一次愿意被串起的许可。`;
  return `逾 ${historyCount} 次装订：线记得所有被收成册的温柔。`;
}

export function formatBindingEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先理好装订线：今天从愿意串起开始。";
  if (circulationsToday < 3) return "穿线、收紧、打结：流通也是一种装订。";
  return "忙完把针插回垫上——串完了，人也要松一松。";
}

export function formatBindingPair(day: number, warmth: number): string {
  return `${formatBindingThreadLine(day)} ${formatSewingNeedleLine(warmth)}`;
}
