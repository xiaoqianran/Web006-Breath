# 开发进度（PROGRESS）

## 总览（与仓库实测对齐 · 2026-07-23）

| 项 | 真实值 |
|----|--------|
| 项目 | 一息 · 温柔瞬间铺 |
| 版本 | 0.2.1（package.json） |
| 分支 | `main` |
| 工作区 | clean（以提交当时为准） |
| 最近 HEAD | `dd5c53f51362628a13ba71b2783c5915bb3688a6` |
| 累计提交数 | 约 44+（`git rev-list --count HEAD`） |
| 轮次 | **0038** / 1000 |
| 里程碑 | M0 完成 · **M1 进行中** |
| 测试 | **`npm test` → 68 passed**（22 files） |
| 验收 | `npm run check` = test + build + smoke |
| 性能 | `npm run perf` 有真实 ms 输出（见 docs/PERFORMANCE.md） |
| 剧本 | **15 日** `DAY_SCRIPTS` |
| 情绪样本 | 24 条 `SAMPLE_EMOTIONS` |
| 核心循环 | playable_demo_ready |

## 已交付系统

- 核心循环：接待 → 形态转化 → 上架/赠予  
- 货架（容量 5）/ 被买走 / 温情价  
- 连心、默契 HUD、弱推荐形态  
- **15 日剧本**、日事件特供、再访（好感联动）、店事事件  
- 好感排行、解锁（含半月掌灯）、图鉴  
- 存档、设置、教程、键盘、skip-link/aria、移动端布局  
- 美术：menu_bg / shop_bg / cover / vessels_sheet + SVG 图标  
- 静默音频总线（尚无真实音频文件；程序化音效见后续轮）

## 轮次日志（摘要）

| 轮次 | 结果要点 | 代表提交 |
|------|----------|----------|
| 0001 | 文档与 autodev | `1c74216` |
| 0002–0005 | 脚手架+核心循环+UI+测试 | `2ea25cd` |
| 0006–0008 | 图鉴存档提示 | `ae5040d` |
| 0009–0010 | 设置教程美术 | `5839406` |
| 0011–0014 | 解锁事件/键盘/SVG/质量门 | `e50423f` `8df55c9` |
| 0015–0021 | 货架连心音频schema封面 | 见 git log |
| 0026–0036 | 再访/性能/温情价/店事/好感/15日/半月解锁 | 至 `361df3b`/`efd480b` |
| 0037–0038 | 控制面对齐 + 程序化音效 | `b57fa7f` `dd5c53f` |

## 已知问题

- 无真实 BGM/SFX 文件（仅 SilentAudioBus）  
- 浏览器长时性能未测  
- 控制面曾短暂不同步（本轮修复）  

## 下一优先

1. T0038 程序化 UI 音效  
2. 更多情绪/剧本打磨  
3. 真音频资源（合法）  
4. 持续 M1→M2  

## 恢复命令

```bash
cd /root/wk
git status
git log -5 --oneline
npm install
npm run check
npm run dev
```
EOF
