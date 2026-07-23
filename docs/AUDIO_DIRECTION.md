# 音频需求说明（AUDIO_DIRECTION）

当前版本以静音可玩为默认；本文件定义毕业设计级音频规格，待资源到位后接入。

## 目标氛围

- 午后书店 / 小铺：低频环境、克制、不抢文案
- 避免惊吓、强冲击、循环感生硬的电子舞曲

## 总线

| 总线 | 默认音量 | 说明 |
|------|----------|------|
| master | 0.8 | 总闸 |
| bgm | 0.45 | 循环 BGM |
| sfx | 0.7 | UI/反馈 |
| ambience | 0.3 | 环境层（可选） |

设置页后续增加滑条；尊重系统「减少动态」时可降低或关闭非必要 SFX。

## BGM

| ID | 场景 | 情绪 | 时长建议 | 循环点 |
|----|------|------|----------|--------|
| bgm_menu | 主菜单 | 温暖、空灵 | 60–90s | 淡入淡出无缝 |
| bgm_shop | 经营中 | 更轻的木吉他/钢琴 | 90–120s | 同左 |

## SFX

| ID | 触发 | 描述 |
|----|------|------|
| sfx_click | 按钮 | 轻木点击 |
| sfx_accept | 接待客人 | 纸页翻动 |
| sfx_craft_ok | 转化完成 | 柔和铃/风铃 |
| sfx_rare | 珍稀品质 | 略亮的泛音 |
| sfx_circulate | 上架/赠予 | 布料/丝带轻响 |
| sfx_day_end | 打烊 | 门铃远去 |

## 实现策略（待）

1. `src/core/audio-bus.ts` 纯接口 + 无音源 stub
2. `src/ui/audio-player.ts` 使用 HTMLAudioElement 或 Web Audio
3. 资产放 `public/assets/audio/`，清单写入 ASSET_MANIFEST
4. 许可：仅原创或明确 CC0/CC-BY 可商用素材

## 现状

- `SilentAudioBus`：测试与无输出环境
- `ProceduralAudioBus` + `toneForSfx`：程序化短音（Web Audio），**无外部音频文件**
- UI：`playWebAudioTone`；设置「减少动效」时关闭音效
- 仍无循环 BGM 文件；BGM 仍为逻辑占位
EOF

