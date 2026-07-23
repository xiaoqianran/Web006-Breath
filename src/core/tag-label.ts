/**
 * 情绪标签展示文案（纯函数）
 */
import type { EmotionTag } from "./types";
import { EMOTION_TAG_LIST } from "./emotion-tags";

/** 标签气质短注（叙事用） */
const TAG_NOTES: Record<EmotionTag, string> = {
  想念: "远方与回声",
  释然: "松开的手",
  疲惫: "需要被托住",
  悸动: "轻轻一颤",
  遗憾: "未说出口",
  安心: "可以歇脚",
  期待: "向前一点",
  孤独: "独自的房间",
  温柔: "不刺的光",
  勇气: "迈出半步",
};

export function tagNote(tag: EmotionTag): string {
  return TAG_NOTES[tag] ?? "一种心情";
}

export function formatTagLine(tag: EmotionTag): string {
  return `${tag} · ${tagNote(tag)}`;
}

export function formatTagsLine(tags: readonly EmotionTag[]): string {
  if (tags.length === 0) return "无标签";
  return tags.map((t) => formatTagLine(t)).join("；");
}

export function listAllTagLines(): string[] {
  return EMOTION_TAG_LIST.map((t) => formatTagLine(t));
}
