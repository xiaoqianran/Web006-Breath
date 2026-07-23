# AGENTS.md — 自治开发约定

## 项目

**一息**：温柔瞬间情绪流通小店游戏（Web / TypeScript）。

## 目录

- `src/core` — 纯逻辑（可测，无 DOM）
- `src/ui` — 界面与交互
- `src/data` — 静态内容
- `docs` — 设计与进度
- `.autodev` — 自治状态与 backlog
- `tests` — 测试（也可与源码同目录 `*.test.ts`）

## 命令

```bash
npm install
npm run dev      # 开发
npm run build    # 构建
npm test         # 单元测试
npm run preview  # 预览构建产物
```

## 提交

Conventional Commits（中文 subject），每轮一次原子提交。禁止未授权 push。

## 恢复

先读 `.autodev/state.json` 的 `resume_instructions`，再读 `docs/PROGRESS.md`。
EOF
