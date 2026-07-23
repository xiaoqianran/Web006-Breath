# 一息 · 温柔瞬间铺

> 把小情绪变成花、茶、画、音乐或小物件，再流通给需要它的人。

毕业设计向 **Web 叙事经营游戏**。玩家经营情绪流通小店「一息」：接待客人的心情碎片，选择容器形态完成转化，上架或赠予，积累温存。

## 快速开始

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址（默认 `http://localhost:5173`）。

```bash
npm test          # 单元测试
npm run build     # 生产构建到 dist/
npm run preview   # 预览构建产物
```

## 核心玩法（最小循环）

1. 阅读客人留下的情绪  
2. 选择形态：花 / 茶 / 画 / 音乐 / 小物件  
3. 转化并查看品质  
4. 上架或赠予，完成一次「情绪流通」  
5. 获得温存，接待下一位  

## 技术栈

- TypeScript + Vite  
- 原生 DOM UI  
- Vitest（核心规则单测）  
- 逻辑与界面分离：`src/core` / `src/ui`

## 文档

| 文档 | 说明 |
|------|------|
| [docs/GDD.md](docs/GDD.md) | 游戏设计 |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | 技术架构 |
| [docs/ROADMAP.md](docs/ROADMAP.md) | 1000 轮路线图框架 |
| [docs/PROGRESS.md](docs/PROGRESS.md) | 进度日志 |
| [docs/ASSUMPTIONS.md](docs/ASSUMPTIONS.md) | 假设 |
| [docs/DECISIONS.md](docs/DECISIONS.md) | 决策 |
| [docs/ASSET_MANIFEST.md](docs/ASSET_MANIFEST.md) | 资产清单 |
| [AGENTS.md](AGENTS.md) | Agent 约定 |

## 已实现功能（阶段性 · v0.2）

- 核心循环：接待 → 选形态 → 上架/赠予
- 货架陈列、被买走、容量上限；温情价展示
- 连心、默契 HUD、形态弱推荐
- 五日剧本、日事件特供、偶数日再访
- 瞬间图鉴 / 解锁 toast / localStorage 存档
- 设置、教程、键盘快捷键、移动端布局
- 主菜单 / 店内 / 宣传封面美术；SVG 形态图标
- `npm run check` / `npm run perf` 验收与性能基线  
- 程序化 UI 音效（减少动效时关闭）、本局统计、28 情绪、15 日剧本

## 自治开发

状态机控制面位于 `.autodev/`。恢复工作时请先阅读 `state.json` 中的 `resume_instructions`。

## 许可

原创项目代码与文档默认保留用于毕业设计展示；第三方依赖见各包许可证。不包含未授权商业 IP 素材。
EOF