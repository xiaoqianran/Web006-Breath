# 开发进度（PROGRESS）

## 总览（与仓库实测对齐）

| 项 | 真实值 |
|----|--------|
| 项目 | 一息 · 温柔瞬间铺 |
| 版本 | 0.2.5（package.json） |
| 分支 | `main` |
| tip | 以 `git rev-parse HEAD` 为准 |
| 轮次 | **0102** / 1000 |
| 里程碑 | M0 **done** · M1 **in_progress** · M2 **started** |
| 测试 | **`npm test` → 128 passed**（45 files） |
| 验收 | `npm run check` = test + build + smoke |
| 剧本 | **15 日** |
| 情绪样本 | **42** 条 |
| 音频 | **8** WAV + Hybrid |
| 美术 | menu/shop/cover/vessels + **order_board / vessels_display / keeper** |
| 核心循环 | playable_demo_ready |
| 订单 | M2 骨架可履约 |

## 已交付系统

- 核心循环：接待 → 形态转化 → 上架/赠予
- 货架 / 温情价 / 连心 / 15 日剧本 / 再访 / 好感 / 店事
- 解锁、图鉴、统计、存档、设置（音量滑条）、教程、a11y live region
- HybridAudioBus + 原创 WAV
- **M2 当日委托**（`orders.ts`）：确定性 roll、赠予/售出履约、店内告示板 UI
- 新美术：委托告示板、五形态展示、掌灯人剪影

## 轮次日志（摘要）

| 轮次 | 结果 | Commit |
|------|------|--------|
| 0001–0096 | M0–M1 深化 | 见 git log |
| 0097 | 真音频 T0039 | `07db690` |
| 0098 | 读屏 T0098 | `64facfc` |
| 0099 | 音量 T0099 | `c32b6ef` |
| **0100–0101** | **M2 订单 + 委托高亮 + 美术** | `6c29c93` |
| **0102** | **情绪 42 + 茶台/春饰** | 本轮 tip |

## 下一优先

1. 订单弱引导（推荐 vessel）
2. 情绪/剧本内容扩充
3. 持续生图接入
4. 滚向 M2 0101–0200

## 恢复

```bash
cd /root/wk && git status && git log -5 --oneline && npm run check && npm run dev
```
