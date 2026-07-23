/**
 * 教程步骤文案（纯函数，可单测）
 */

export interface TutorialStep {
  title: string;
  body: string;
}

export const TUTORIAL_STEPS: readonly TutorialStep[] = [
  {
    title: "接待",
    body: "听取客人交来的一小段心情——先听，再选。",
  },
  {
    title: "转化",
    body: "选择花 / 茶 / 画 / 音乐 / 小物件作为容器，把心情托住。",
  },
  {
    title: "流通",
    body: "上架或赠予，让情绪再次被需要的人接住。",
  },
  {
    title: "委托",
    body: "告示板上的当日委托，匹配形态可额外温存与口碑。",
  },
] as const;

export function formatTutorialStepLine(step: TutorialStep, index: number): string {
  return `${index + 1}. ${step.title} — ${step.body}`;
}

export function listTutorialStepLines(): string[] {
  return TUTORIAL_STEPS.map((s, i) => formatTutorialStepLine(s, i));
}

export function formatTutorialFooter(): string {
  return "匹配越贴切，品质与温存越高。没有严格失败，只有更温柔的选择。";
}

export function formatTutorialWelcome(): string {
  return "欢迎来到「一息」：一家把小情绪变成可流通温柔的小店。";
}
