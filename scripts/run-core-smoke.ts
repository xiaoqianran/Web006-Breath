/**
 * 两次「启动」等价：各建一局并完成至少一次完整流通，断言温存与历史。
 * 运行：npx vite-node scripts/run-core-smoke.ts
 */
import {
  createGameState,
  runFullCirculation,
  continueAfterResult,
  type Emotion,
} from "../src/core/index";

const queue: Emotion[] = [
  {
    id: "smoke1",
    guestName: "冒烟客",
    text: "今天也想被温柔对待。",
    tags: ["温柔", "想念"],
    intensity: 4,
  },
  {
    id: "smoke2",
    guestName: "冒烟客乙",
    text: "喝口茶再走。",
    tags: ["疲惫", "安心"],
    intensity: 2,
  },
];

function launchOnce(label: string): void {
  let state = createGameState(queue, { dayGoalCirculations: 10, dayGoalWarmth: 100 });
  state = runFullCirculation(state, "flower", "gift");
  if (state.circulationsToday !== 1) {
    throw new Error(`${label}: expected 1 circulation, got ${state.circulationsToday}`);
  }
  if (state.warmth <= 0) {
    throw new Error(`${label}: warmth should increase`);
  }
  if (!state.lastResult?.momentCard.includes("冒烟客")) {
    throw new Error(`${label}: moment card missing guest`);
  }
  state = continueAfterResult(state);
  state = runFullCirculation(state, "tea", "display");
  if (state.circulationsToday !== 2) {
    throw new Error(`${label}: expected 2 circulations`);
  }
  console.log(
    JSON.stringify({
      label,
      ok: true,
      warmth: state.warmth,
      circulations: state.circulationsToday,
      lastQuality: state.history[1]?.item.quality,
    }),
  );
}

launchOnce("launch-A");
launchOnce("launch-B");
console.log("SMOKE_OK");
