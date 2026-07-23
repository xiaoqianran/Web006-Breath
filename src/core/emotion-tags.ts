/** 情绪标签全集与校验（纯函数） */

import type { EmotionTag } from "./types";

export const EMOTION_TAG_LIST: readonly EmotionTag[] = [
  "想念",
  "释然",
  "疲惫",
  "悸动",
  "遗憾",
  "安心",
  "期待",
  "孤独",
  "温柔",
  "勇气",
] as const;

const SET = new Set<string>(EMOTION_TAG_LIST);

export function isEmotionTag(value: string): value is EmotionTag {
  return SET.has(value);
}

export function assertEmotionTags(tags: readonly string[]): tags is EmotionTag[] {
  return tags.length > 0 && tags.every((t) => isEmotionTag(t));
}
