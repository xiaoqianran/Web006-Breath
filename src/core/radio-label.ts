/**
 * 软广播与唱针叙事（纯函数，可单测）
 * 店里不必大声：一点底噪就能把情绪托住。
 */

export function formatRadioLine(day: number): string {
  if (day % 3 === 0) return "软广播调到最低：只剩沙沙的伴奏。";
  if (day % 2 === 0) return "电台里有人轻轻哼，像隔壁有人在整理心情。";
  return "柜角收音机亮着一点黄：不抢戏，只陪着。";
}

export function formatNeedleLine(warmth: number): string {
  if (warmth <= 0) return "唱针还停着：第一份流通会让它落下。";
  if (warmth < 12) return "唱针刚贴上纹路：声音还薄，但已在转。";
  if (warmth < 24) return "唱针稳着走：店里的空气开始有回声。";
  return "唱针走完一圈又一圈：温存像可循环的旋律。";
}

export function formatRadioAside(vesselMusic: boolean): string {
  if (vesselMusic) return "音乐形态与软广播叠在一起：像把心情放进可听的壳。";
  return "即使不做音乐，收音机也可以只当背景呼吸。";
}

export function formatRadioEncourage(circulationsToday: number): string {
  if (circulationsToday <= 0) return "先开一点点音量：今天从听得见自己开始。";
  if (circulationsToday < 3) return "曲目换了几首：客人也换了几位，节奏刚好。";
  return "播完一上午也不燥：温柔可以是循环播放。";
}

export function formatRadioPair(day: number, warmth: number): string {
  return `${formatRadioLine(day)} ${formatNeedleLine(warmth)}`;
}
