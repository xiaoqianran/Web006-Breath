# 动态路线图（1000 轮框架）

> 状态值：pending | in_progress | done | blocked | cancelled  
> 提交哈希仅在完成后填写真实值。

## 里程碑总览

| 里程碑 | 轮次 | 主题 | 状态 |
|--------|------|------|------|
| M0 | 0001–0020 | 审计、架构、最小原型 | **done** |
| M1 | 0021–0100 | 核心玩法循环完善 | **in_progress** |
| M2 | 0101–0200 | 主要游戏系统 | pending |
| M3 | 0201–0320 | 关卡、客人、内容管线 | pending |
| M4 | 0321–0420 | UI/UX/输入/设置/无障碍 | pending（部分已提前做） |
| M5 | 0421–0540 | 角色环境道具特效视觉 | pending（部分美术已做） |
| M6 | 0541–0620 | 音频氛围演出 | pending（总线已有） |
| M7 | 0621–0720 | 存档数据配置工具 | pending（存档 MVP 已有） |
| M8 | 0721–0820 | 自动化测试与回归 | pending（单测已有） |
| M9 | 0821–0900 | 性能兼容稳定 | pending（基线脚本已有） |
| M10 | 0901–0960 | 完整体验打磨 | pending |
| M11 | 0961–0990 | 构建发布与答辩材料 | pending（大纲已有） |
| M12 | 0991–1000 | 最终验收冻结 | pending |

---

## M0 详细轮次（0001–0020）— 已全部完成

| 轮次 | 标题 | 类型 | 状态 | 实际结果 | Commit |
|------|------|------|------|----------|--------|
| 0001 | 项目引导与文档骨架 | docs | done | docs+autodev | `1c74216` |
| 0002 | Vite+TS 脚手架 | build | done | package/vite | `2ea25cd` |
| 0003 | 核心规则模块 | feat | done | matching/game | `2ea25cd` |
| 0004 | 最小可玩 UI | feat | done | YixiApp | `2ea25cd` |
| 0005 | 核心循环单测 | test | done | core-loop tests | `2ea25cd` |
| 0006 | 客人队列与多情绪 | feat | done | SAMPLE_EMOTIONS | `ae5040d` |
| 0007 | 温存/口碑资源 | feat | done | HUD | `2ea25cd`+后续 |
| 0008 | 流通结果卡片 | feat | done | momentCard | `2ea25cd` |
| 0009 | 主菜单场景 | feat | done | menu+hero | `5839406` |
| 0010 | 日结算雏形 | feat | done | day_complete | `2ea25cd` |
| 0011 | localStorage 存档 | feat | done | save.ts | `ae5040d` |
| 0012 | 设置页 | feat | done | settings | `5839406` |
| 0013 | 图鉴 | feat | done | codex | `ae5040d` |
| 0014 | 内容扩充 | level | done | ≥18 情绪 | 多提交 |
| 0015 | 相性提示 | feat | done | hints | `ae5040d` |
| 0016 | 响应式布局 | style | done | @media | `c49db04` 等 |
| 0017 | README 完善 | docs | done | README | 持续 |
| 0018 | M0 质量门 | test | done | QUALITY_GATE_M0 | `8df55c9` |
| 0019 | 架构说明 | docs | done | ARCHITECTURE | `5839406` |
| 0020 | M0 回顾进 M1 | chore | done | backlog 演进 | 多提交 |

## M1 已完成摘录（0021–0036）

| 轮次/任务 | 标题 | Commit |
|-----------|------|--------|
| 连心 | qualityStreak | `cb3939a` |
| 货架 | shelf + 容量 | `b09c5b4` `687f284` |
| 音频总线/toast | SilentAudioBus | `5944b22` |
| schema+店内背景 | content-schema ART-003 | `c49db04` |
| 剧本 | 5→10→15 日 | `5c9bb3f` `3a49fcb` `7d65643` |
| 再访/好感/店事/温情价 | 系统深化 | 见 git log |
| 半月解锁 | fortnight | `361df3b` |
| a11y skip-link | 基础无障碍 | `3d27fba` |

## M1 已完成续（0037–0046）

| 轮次 | 标题 | 状态 | Commit |
|------|------|------|--------|
| 0037 | 控制面对齐 | **done** | `b57fa7f` |
| 0038 | 程序化 UI 音效 | **done** | `b57fa7f` |
| 0039–0040 | 情绪至 24 条 | **done** | `cd4b554` |
| 0041 | 资产存在性测试 | **done** | `bb2b366` / `4bea6d3` |
| 0042 | 本局流通统计 | **done** | `a838afd` |
| 0043 | 打烊统计摘要 | **done** | `9d6c006` |
| 0044 | sfxEnabled 设置 | **done** | `baae0ae` |
| 0045 | TEST_REPORT | **done** | `d5af181` |
| 0046 | 赠予之心解锁 | **done** | `09dfb6e` |

## M1 待办（0047+）

| 轮次 | 标题 | 状态 |
|------|------|------|
| 0047–0048 | 三缺口对齐 + 帮助覆盖层 | **done** | `65a5659` |
| 0049+ | 真音频文件 / 读屏 / M2… | pending |

## M2–M12 框架（0101–1000）

保持 1000 轮框架；细节按 backlog 动态展开。见历史章节（定价、库存、内容管线、完整无障碍、真实音频、性能、答辩冻结）。

路线图与 `.autodev/backlog.json`、`docs/PROGRESS.md` 同步。
EOF