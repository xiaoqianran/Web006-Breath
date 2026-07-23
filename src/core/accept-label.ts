/**
 * 接待处文案（纯函数，可单测）
 */

export function formatAcceptButtonLabel(queueLength: number): string {
  if (queueLength <= 0) return "暂无客人";
  if (queueLength === 1) return "接待下一位";
  return `接待下一位（还有 ${queueLength} 位）`;
}

export function formatAcceptEmptyHint(): string {
  return "门口暂时安静。可以整理货架，或等门铃再响。";
}

export function formatAcceptReadyHint(queueLength: number): string {
  if (queueLength <= 0) return formatAcceptEmptyHint();
  if (queueLength === 1) {
    return "一位客人在门边等着，推开帘子就能听见。";
  }
  return `门外排着 ${queueLength} 位心情，一位一位轻轻接住即可。`;
}

export function formatAcceptAriaLabel(queueLength: number): string {
  if (queueLength <= 0) return "暂无客人可接待";
  return `接待下一位客人，队列中还有 ${queueLength} 位`;
}
