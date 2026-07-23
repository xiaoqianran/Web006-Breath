# 开发进度（PROGRESS）

## 总览（与仓库实测对齐）

| 项 | 真实值 |
|----|--------|
| 项目 | 一息 · 温柔瞬间铺 |
| 版本 | 0.2.2（package.json） |
| 分支 | `main` |
| tip（写入前） | 以 `git rev-parse HEAD` 为准；对齐时为 `6abee2408ea16d646b4948ac008f88144f1bf801` |
| 轮次 | **0049** / 1000 |
| 里程碑 | M0 **done** · M1 **in_progress** |
| 测试 | **`npm test` → 102 passed**（39 files） |
| 验收 | `npm run check` = test + build + smoke |
| 性能 | `npm run perf`（真实 ms，见 PERFORMANCE.md） |
| 剧本 | **15 日** `DAY_SCRIPTS` |
| 情绪样本 | **28** 条 `SAMPLE_EMOTIONS` |
| 核心循环 | playable_demo_ready |

## 已交付系统

- 核心循环：接待 → 形态转化 → 上架/赠予  
- 货架（容量 5）/ 被买走 / 温情价  
- 连心、默契 HUD、弱推荐形态  
- **15 日剧本**、日事件特供、再访（好感联动）、店事事件  
- 好感排行、解锁（半月掌灯、**赠予之心**）、图鉴、本局统计  
- 存档、设置（含 **sfxEnabled**）、教程、键盘、skip-link/aria、移动端  
- 美术：menu_bg / shop_bg / cover / vessels_sheet + SVG 图标  
- **程序化 UI 音效**（`ProceduralAudioBus` + Web Audio；减少动效或关闭音效时静音）  
- 尚无**外部** BGM/SFX 资源文件（真音频仍为待办 T0039）

## 轮次日志（摘要）

| 轮次 | 结果 | Commit |
|------|------|--------|
| 0001–0020 | M0 原型 | `1c74216`…`8df55c9` 等 |
| 0021–0036 | 货架/连心/剧本/好感 | 见 git log |
| 0037–0038 | 控制面对齐 + 程序化音效 | `b57fa7f` |
| 0039–0041 | 24 情绪、资产测试 | `cd4b554` `bb2b366` |
| 0042–0044 | 统计、打烊、sfx 开关 | `a838afd` `9d6c006` `baae0ae` |
| 0045–0046 | 测试报告、赠予之心 | `d5af181` `09dfb6e` |
| 0047–0048 | 三缺口对齐 + 帮助层 | `65a5659` |

## 已知问题

- 无外部 BGM/SFX 文件（程序化短音已有）  
- 浏览器长时性能未测  
- last_commit 字段可能落后 tip 一个 chore 提交；以 `git rev-parse HEAD` 为准  

## 下一优先

1. **T0039** 合法真音频资源（可选；程序化音效与 ? 帮助已有）  
2. 读屏 / 焦点陷阱深化  
3. M2 随机订单等系统  
4. 持续 1000 轮内容与打磨  

## 恢复

```bash
cd /root/wk
git status && git log -5 --oneline
npm run check && npm run dev
```

读 `.autodev/state.json` → `resume_instructions`。
EOF