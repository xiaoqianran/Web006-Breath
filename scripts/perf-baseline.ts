/**
 * 真实测量：1000 次完整流通 + 200 次存档序列化。
 * 运行：npx vite-node scripts/perf-baseline.ts
 */
import {
  createGameState,
  runFullCirculation,
  continueAfterResult,
  serializeState,
  deserializeState,
  type Emotion,
} from "../src/core";

const guest: Emotion = {
  id: "perf",
  guestName: "perf",
  text: "性能测试用语，需要足够长度。",
  tags: ["想念", "温柔"],
  intensity: 4,
};

function bench(label: string, n: number, fn: () => void): number {
  const t0 = performance.now();
  for (let i = 0; i < n; i++) fn();
  const ms = performance.now() - t0;
  console.log(JSON.stringify({ label, iterations: n, totalMs: Number(ms.toFixed(3)), perOpMs: Number((ms / n).toFixed(4)) }));
  return ms;
}

const N = 1000;
bench("full_circulation", N, () => {
  let s = createGameState(
    Array.from({ length: 3 }, (_, i) => ({ ...guest, id: `p${i}` })),
    { dayGoalCirculations: 99, dayGoalWarmth: 9999 },
  );
  s = runFullCirculation(s, "flower", "gift");
  s = continueAfterResult(s);
  s = runFullCirculation(s, "tea", "display");
});

let sample = createGameState([guest]);
sample = runFullCirculation(sample, "flower", "gift");
bench("serialize_deserialize", 200, () => {
  const raw = serializeState(sample);
  deserializeState(raw);
});

console.log("PERF_BASELINE_OK");
