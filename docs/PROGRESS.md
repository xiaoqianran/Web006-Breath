# 开发进度（PROGRESS）

## 总览

- 项目：一息（Gentle Moments Shop）v0.2.0
- 当前轮次：约 **0026 / 1000**
- 里程碑：M0 完成 · M1 深化中（可答辩演示）
- 测试：**51 passed**（`npm test`）
- 一键验收：`npm run check`（test + build + smoke）
- HEAD：以 `git rev-parse HEAD` 为准（含再访系统等）

## 可演示功能清单

| 模块 | 状态 |
|------|------|
| 核心循环 emotion→vessel→circulate | ✅ |
| 上架货架 / 被买走 / 容量 5 | ✅ |
| 赠予 / 连心 / 默契 HUD | ✅ |
| 五日剧本 + 日事件 + 再访 | ✅ |
| 存档 / 设置 / 教程 / 解锁 toast | ✅ |
| 键盘 + 移动端布局 | ✅ |
| 美术 menu/shop/cover + SVG 图标 | ✅ |
| 内容 schema + 匹配属性测试 | ✅ |
| 静默音频总线 | ✅（无真实音频文件） |
| 毕业文档包 | ✅ |

## 命令

```bash
npm install
npm run dev      # 演示
npm run check    # test+build+smoke
```

## 下一优先

1. 真实音频资源接入 AudioBus  
2. 性能基线实测  
3. 客人好感持久化扩展  
4. M2：定价/多货架事件  
5. 持续向 1000 轮内容与打磨推进  

## 恢复

读 `.autodev/state.json` → `resume_instructions`，然后 `npm run check`。
EOF
