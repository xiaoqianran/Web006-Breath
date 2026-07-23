# M1 质量门检查（阶段性）

| 检查项 | 结果 | 证据 |
|--------|------|------|
| 核心循环可运行 | 通过 | smoke 两次一致 |
| 货架/连心/日剧本 | 通过 | shelf/streak/day-scripts 测试 |
| 存档兼容新字段 | 通过 | normalizeGameState + save 测试 |
| 内容校验 | 通过 | content-schema 对 SAMPLE |
| 视觉资源存在 | 通过 | menu_bg/shop_bg/cover/vessels_sheet |
| 移动端基本布局 | 通过 | CSS @media 640 |
| 自动化测试 | 通过 | 46 tests |
| 构建 | 通过 | vite build |
| 真音频 | 未接入 | SilentAudioBus；见 AUDIO_DIRECTION |
| 长时性能 | 待测 | 未做泄漏测试 |

**结论**：M1 演示就绪 **有条件通过**（音频与长时性能待测）。
EOF
