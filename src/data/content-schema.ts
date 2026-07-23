import type { Emotion, EmotionTag } from "../core/types";

const TAGS: EmotionTag[] = [
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
];

export interface ContentValidationIssue {
  path: string;
  message: string;
}

/** 校验单条情绪内容是否符合内容管线 schema */
export function validateEmotion(raw: unknown, path = "emotion"): ContentValidationIssue[] {
  const issues: ContentValidationIssue[] = [];
  if (!raw || typeof raw !== "object") {
    return [{ path, message: "必须是对象" }];
  }
  const e = raw as Partial<Emotion>;
  if (typeof e.id !== "string" || e.id.length < 1) {
    issues.push({ path: `${path}.id`, message: "需要非空字符串 id" });
  }
  if (typeof e.guestName !== "string" || e.guestName.length < 1) {
    issues.push({ path: `${path}.guestName`, message: "需要非空 guestName" });
  }
  if (typeof e.text !== "string" || e.text.length < 4) {
    issues.push({ path: `${path}.text`, message: "text 至少 4 字" });
  }
  if (!Array.isArray(e.tags) || e.tags.length < 1 || e.tags.length > 3) {
    issues.push({ path: `${path}.tags`, message: "tags 需要 1–3 个" });
  } else {
    e.tags.forEach((t, i) => {
      if (!TAGS.includes(t as EmotionTag)) {
        issues.push({ path: `${path}.tags[${i}]`, message: `未知标签 ${String(t)}` });
      }
    });
  }
  if (typeof e.intensity !== "number" || e.intensity < 1 || e.intensity > 5) {
    issues.push({ path: `${path}.intensity`, message: "intensity 需为 1–5" });
  }
  return issues;
}

export function validateEmotionList(list: unknown): ContentValidationIssue[] {
  if (!Array.isArray(list)) {
    return [{ path: "list", message: "需要数组" }];
  }
  const issues: ContentValidationIssue[] = [];
  const ids = new Set<string>();
  list.forEach((item, i) => {
    issues.push(...validateEmotion(item, `list[${i}]`));
    const id = (item as Emotion)?.id;
    if (typeof id === "string") {
      if (ids.has(id)) issues.push({ path: `list[${i}].id`, message: `重复 id ${id}` });
      ids.add(id);
    }
  });
  return issues;
}

export function isValidEmotionCatalog(list: unknown): boolean {
  return validateEmotionList(list).length === 0;
}
