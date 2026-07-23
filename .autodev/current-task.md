# 当前任务

- **轮次**：0001
- **任务 ID**：T0001
- **标题**：项目引导与文档骨架
- **问题**：空仓库，需建立可恢复的自治开发控制面与游戏假设
- **计划修改**：
  - `.gitignore`, `README.md`, `AGENTS.md`, `CLAUDE.md`
  - `docs/*`, `.autodev/*`
- **步骤**：
  1. Git init 与目录
  2. 假设、GDD、路线图、决策、美术文档
  3. state/backlog/current-task
  4. README
  5. 提交
- **风险**：无
- **验收**：关键文件存在；git 有首次提交
- **测试**：`test -f docs/GDD.md && test -f .autodev/state.json`
- **回滚**：`git rm` / 删除未跟踪文件
