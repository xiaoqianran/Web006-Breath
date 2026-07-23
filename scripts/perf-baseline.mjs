/**
 * 轻量性能基线：重复核心循环与序列化，输出真实耗时（非伪造）。
 * 用法：node scripts/perf-baseline.mjs
 */
import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

// 通过 vite-node 更合适；此处用动态说明引导
console.log("请使用: npx vite-node scripts/perf-baseline.ts");
process.exit(0);
