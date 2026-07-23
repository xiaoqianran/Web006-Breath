# 技术架构说明

## 总览

「一息」是浏览器端单页应用：Vite 打包，TypeScript 编写，DOM 渲染。

```
index.html → src/main.ts → YixiApp (ui)
                           ↘ src/core/* 纯逻辑
                           ↘ src/data/* 静态内容
```

## 分层

| 层 | 目录 | 职责 | 依赖约束 |
|----|------|------|----------|
| 数据 | `src/data` | 情绪样本、日后关卡数据 | 可依赖 core 类型 |
| 核心 | `src/core` | 规则、状态机、存档、设置、提示 | **禁止** DOM / localStorage 直接耦合（通过注入 store） |
| 界面 | `src/ui` | 渲染、输入、浏览器 storage 适配 | 调用 core API |
| 入口 | `src/main.ts` | 挂载 `#app` | |

## 核心状态机

`GamePhase`：

```
awaiting_emotion → awaiting_vessel → awaiting_circulation → result
        ↑__________________________________________| 
                                                    → day_complete
```

关键转移函数（均不可变地返回新 state）：

- `acceptNextEmotion`
- `chooseVessel`（内部 `evaluateMatch`）
- `circulate`
- `continueAfterResult`
- `startNextDay`

## 匹配算法

见 `src/core/matching.ts` 与 GDD §3.3：标签重合 ×2，高强度加成，品质分档，流通价值与温存结算。

## 持久化

| Key | 模块 | 内容 |
|-----|------|------|
| `yixi.save.v1` | `save.ts` | 整局 `GameState` |
| `yixi.settings.v1` | `settings.ts` | 玩家设置 |

版本字段用于未来迁移；破坏性变更时递增 version。

## 测试策略

- Vitest 直接 import shipped 模块
- 不 mock 被测函数；storage 用 `createMemoryStore`
- `npm run smoke` 两次启动等价路径验证流通可观测结果

## 构建

```
npm run dev      # Vite dev server
npm run build    # tsc --noEmit && vite build → dist/
npm run preview  # 预览 dist
```

## 扩展点

1. 内容：JSON schema + 校验脚本（M3）
2. 音频：设置总线 + Howler/原生 Audio（M6）
3. 视觉：替换 `public/assets` 并在 UI 引用（M5）
4. 无障碍：焦点环、键盘导航、ARIA（M4）
EOF

## 音频

- `SilentAudioBus`：测试
- `ProceduralAudioBus` + `src/ui/beep.ts`：Web Audio 短音
- 设置 `sfxEnabled` 与 `reduceMotion` 控制开关
