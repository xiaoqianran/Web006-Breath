# 开发进度（PROGRESS）

## 总览（与仓库实测对齐）

| 项 | 真实值 |
|----|--------|
| 项目 | 一息 · 温柔瞬间铺 |
| 版本 | 0.2.6（package.json） |
| 分支 | `main` |
| tip | 以 `git rev-parse HEAD` 为准 |
| 轮次 | **0170** / 1000 |
| 里程碑 | M0 **done** · M1 **done-ish** · M2 **in_progress** |
| 测试 | **`npm test` → 187 passed**（62 files） |
| 验收 | `npm run check` = test + build + smoke |
| 剧本 | **52 日** |
| 情绪样本 | **88** 条 |
| 音频 | **8** WAV + Hybrid |
| 订单 | 主+候补槽可履约；委托提示与统计 |
| 核心循环 | playable_demo_ready |

## 已交付系统

- 核心循环：接待 → 形态转化 → 上架/赠予
- 货架 / 温情价 / 连心 / 日剧本 / 再访 / 好感 / 店事
- 解锁、图鉴、统计、存档、音量、a11y
- HybridAudioBus + 原创 WAV
- M2 委托：主单+候补、鼓励/接近度旁白
- 温存/口碑/打烊/日氛围/形态叙事
- 客人肖像四变体 + 姓名气质
- 美术：guest_a–c / order_counter / night_rain / shelf_craft / tea_cup / vessel_flower…

## 轮次日志（摘要）

| 轮次 | 结果 | Commit |
|------|------|--------|
| 0001–0164 | 见历史 git log | — |
| **0165** | **客人肖像四变体** | `ae43e66` |
| **0166** | **姓名池+气质+委托柜台** | `5965364` |
| **0167** | **日氛围+夜雨窗** | `d213b83` |
| **0168** | **货架摘要鼓励** | `8609fc5` |
| **0169** | **情绪88/剧本52+茶杯** | `d8ae3d8` |
| **0170** | **形态叙事+花形态** | `b970c74` |

## 下一优先

1. **T0171** 持续 M2
2. 形态美术 art/music/object
3. 内容与无障碍打磨
4. ROADMAP M2 系统

## 恢复

```bash
cd /root/wk && git status && git log -5 --oneline && npm run check && npm run dev
```
