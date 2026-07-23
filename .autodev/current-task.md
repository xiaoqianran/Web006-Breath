# R0047 — 控制面三缺口修复 + 有效增量

## 问题
1. ROADMAP 仍写 0037 in_progress / 0038 pending
2. state last_completed=T0046 但 backlog 无此 id
3. PROGRESS HEAD/音频描述/下一优先过时

## 计划
- 重写 ROADMAP M1 待办段
- PROGRESS 对齐 tip 6ca43c7 / 72 tests / ProceduralAudioBus
- backlog 补齐 T0041–T0046 done + 正确哈希
- state 完整 resume
- 再做一轮有效功能（如暂停菜单快捷帮助）

## 测试
npm run check

## 回滚
git revert
