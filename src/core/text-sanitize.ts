/** 用户可见文案安全处理（纯函数） */

/** 折叠空白、去掉控制字符，限制最大长度 */
export function sanitizeDisplayText(input: string, maxLen = 200): string {
  const cleaned = input
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned.length <= maxLen) return cleaned;
  return cleaned.slice(0, Math.max(0, maxLen - 1)) + "…";
}

export function isBlankText(input: string): boolean {
  return sanitizeDisplayText(input, 10000).length === 0;
}
