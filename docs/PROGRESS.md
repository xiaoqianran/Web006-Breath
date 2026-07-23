# 开发进度（PROGRESS）

## 总览（与仓库实测对齐）

| 项 | 真实值 |
|----|--------|
| 项目 | 一息 · 温柔瞬间铺 |
| 版本 | 0.2.6（package.json） |
| 分支 | `main` |
| tip | 以 `git rev-parse HEAD` 为准 |
| 轮次 | **0128** / 1000 |
| 里程碑 | M0 **done** · M1 **done-ish** · M2 **in_progress** |
| 测试 | **`npm test` → 149 passed**（47 files） |
| 验收 | `npm run check` = test + build + smoke |
| 剧本 | **28 日** |
| 情绪样本 | **56** 条 |
| 音频 | **8** WAV + Hybrid |
| 订单 | 主+候补槽可履约；委托提示与统计 |
| 核心循环 | playable_demo_ready |

## 已交付系统

- 核心循环：接待 → 形态转化 → 上架/赠予
- 货架 / 温情价 / 连心 / 20 日剧本 / 再访 / 好感 / 店事
- 解锁（含委托守约）、图鉴、统计（含委托数）、存档、音量、a11y
- HybridAudioBus + 原创 WAV + 多主题店内背景
- **M2 委托**：主单+候补、形态提示 `orderVesselHintLine`、履约播报
- 美术批次：order/keeper/vessels/day_complete/codex/tea/season/night/rain/gift/shelf/tutorial/letter…

## 轮次日志（摘要）

| 轮次 | 结果 | Commit |
|------|------|--------|
| 0001–0099 | M0–M1 | 见 git log |
| 0100–0112 | M2 订单/内容/美术 | 见 git log |
| **0113** | **委托提示+统计委托+情绪48+教程/信笺美术** | 本轮 tip |

| **0121** | **再访好感阈值提示+门廊美术** | 本轮 tip |

| **0126** | **日目标鼓励+日历美术** | 本轮 tip |

## 下一优先

1. **T0122** 持续 M2
2. 情绪/美术扩充
2. 好感驱动再访深化
2. 客人剪影批次
3. ROADMAP M2 0111–0200 系统

## 恢复

```bash
cd /root/wk && git status && git log -5 --oneline && npm run check && npm run dev
```
