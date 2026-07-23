# 开发进度（PROGRESS）

## 总览（与仓库实测对齐）

| 项 | 真实值 |
|----|--------|
| 项目 | 一息 · 温柔瞬间铺 |
| 版本 | 0.2.4（package.json） |
| 分支 | `main` |
| tip | 以 `git rev-parse HEAD` 为准 |
| 轮次 | **0097** / 1000 |
| 里程碑 | M0 **done** · M1 **in_progress** |
| 测试 | **`npm test` → 114 passed**（43 files） |
| 验收 | `npm run check` = test + build + smoke |
| 性能 | `npm run perf`（真实 ms，见 PERFORMANCE.md） |
| 剧本 | **15 日** `DAY_SCRIPTS` |
| 情绪样本 | **34** 条 `SAMPLE_EMOTIONS` |
| 音频 | **8** 条原创 WAV + HybridAudioBus |
| 核心循环 | playable_demo_ready |

## 已交付系统

- 核心循环：接待 → 形态转化 → 上架/赠予  
- 货架（容量 5）/ 被买走 / 温情价  
- 连心、默契 HUD、弱推荐形态  
- **15 日剧本**、日事件特供、再访（好感联动）、店事事件  
- 好感排行、解锁（半月掌灯、**赠予之心**）、图鉴、本局统计  
- 存档、设置（含 **sfxEnabled**）、教程、键盘、skip-link/aria、移动端  
- 美术：menu_bg / shop_bg / cover / vessels_sheet + SVG 图标  
- **程序化 UI 音效**（`ProceduralAudioBus` + Web Audio）  
- **原创 WAV 文件**（`public/assets/audio/`）+ **`HybridAudioBus`**（文件优先、tone 回退）+ 菜单/店内 BGM  

## 轮次日志（摘要）

| 轮次 | 结果 | Commit |
|------|------|--------|
| 0001–0020 | M0 原型 | 见 git log |
| 0021–0036 | 货架/连心/剧本/好感 | 见 git log |
| 0037–0038 | 控制面对齐 + 程序化音效 | `b57fa7f` |
| 0039–0046 | 情绪扩充、统计、赠予之心 | 见 git log |
| 0047–0048 | 三缺口对齐 + 帮助层 | `65a5659` |
| 0049–0096 | 工具模块、34 情绪、身份测试 | 见 git log |
| **0097** | **T0039 真音频 WAV + Hybrid** | 本轮 tip |

## 已知问题

- BGM 为短循环合成琶音，非长曲  
- 浏览器长时性能未测  
- last_commit 字段可能落后 tip 一个 chore；以 `git rev-parse HEAD` 为准  

## 下一优先

1. **T0098** 读屏 live region / 焦点管理深化  
2. M2 随机订单等系统  
3. 更长 BGM / 音量滑条  
4. 持续 1000 轮内容与打磨  

## 恢复

```bash
cd /root/wk
git status && git log -5 --oneline
npm run check && npm run dev
```

读 `.autodev/state.json` → `resume_instructions`。
