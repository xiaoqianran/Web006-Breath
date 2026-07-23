/**
 * 存档/继续经营叙事（纯函数，可单测）
 */

export function formatSaveEmptyLine(): string {
  return "还没有可继续的店日。开始今日经营，会把进度轻轻记在抽屉里。";
}

export function formatSaveReadyLine(day: number, warmth: number): string {
  return `可继续：第 ${day} 日 · 温存 ${warmth}。抽屉里的便签还温着。`;
}

export function formatContinueButtonLabel(hasSave: boolean): string {
  return hasSave ? "继续经营" : "继续经营（暂无存档）";
}

export function formatSaveEncourage(hasSave: boolean): string {
  if (!hasSave) return "第一次推门也没关系——从接待开始即可。";
  return "存档已在：回到柜台，门铃会记得你。";
}

export function formatAutosaveHint(): string {
  return "流通与打烊后会自动写入本地存档，无需手动保存。";
}
