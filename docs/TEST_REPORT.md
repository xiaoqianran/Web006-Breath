# 测试报告（真实命令结果）

> 勿伪造。下列数字来自本环境执行；重跑请 `npm test` / `npm run check`。

## 最近一次完整验收

| 命令 | 结果 | 证据文件（会话 scratch） |
|------|------|--------------------------|
| `npm test` | **71 passed** / 23 files | `tests-final-count.txt` / `check-71.txt` |
| `npm run build` | success | `check-71.txt` |
| `npm run smoke` ×2 | SMOKE_OK，warmth=19 一致 | `smoke-71a.txt` `smoke-71b.txt` |
| `npm run perf` | 有真实 ms（见 PERFORMANCE.md） | `perf-baseline.txt` |

## 测试分层

| 层 | 文件示例 | 覆盖 |
|----|----------|------|
| 核心循环 | core-loop, streak, shelf | 状态机 |
| 匹配 | matching-properties, hints, affinity | 规则不变量 |
| 持久化 | save, settings | store 注入 |
| 内容 | emotions-data, day-scripts, content-schema | 数据质量 |
| 叙事系统 | revisit, favor, unlocks, shop-events, achievements | 扩展玩法 |
| 音频 | audio-bus, tones | 总线与 tone 表 |
| 资源 | assets-exist | 磁盘资产 |
| 统计 | stats | 会话汇总 |

## 待测

- 浏览器 E2E 点击路径（非 headless 全覆盖）
- 长时内存
- 多浏览器兼容矩阵

## 结论

核心规则与资源路径有自动化覆盖；`npm run check` 可作为 CI/演示前门禁。
EOF
