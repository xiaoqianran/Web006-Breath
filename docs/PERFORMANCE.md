# 性能基线报告（真实测量）

> 环境：Linux，Node 随仓库；命令 `npm run perf`（`vite-node scripts/perf-baseline.ts`）  
> 测量日期：2026-07-23  
> **禁止将本页数字当作在其他机器上的保证值；请本地重跑 `npm run perf`。**

## 本次会话实测摘要

| 场景 | 迭代 | 总耗时 (ms) | 单次 (ms) |
|------|------|-------------|-----------|
| full_circulation（建局+2 次流通） | 1000 | 11.982 | 0.012 |
| serialize_deserialize | 200 | 2.888 | 0.0144 |

原始输出见会话 scratch：`perf-baseline.txt`（若仍存在）或重跑命令。

## 包体（构建产物，约值）

以一次 `npm run build` 日志为准（会随版本变化）：

- JS gzip ≈ 11 kB
- CSS gzip ≈ 2 kB

## 未测项

- 浏览器长时挂机内存
- Lighthouse / FPS
- 低端移动设备

## 结论

核心规则路径在 Node 侧开销极低，当前瓶颈更可能在 DOM 重绘与资源加载，而非匹配算法。
EOF
