# 音频需求说明（AUDIO_DIRECTION）

当前版本：**程序化短音 + 原创 WAV 文件** 双通道；设置关闭音效或「减少动效」时静音。

## 目标氛围

- 午后书店 / 小铺：低频环境、克制、不抢文案
- 避免惊吓、强冲击、循环感生硬的电子舞曲

## 总线

| 总线 | 默认音量 | 说明 |
|------|----------|------|
| master | 0.8 | 总闸 |
| bgm | 0.45 | 循环 BGM |
| sfx | 0.7 | UI/反馈 |
| ambience | 0.3 | 环境层（可选，尚未资源） |

设置页：`sfxEnabled` 总开关；尊重「减少动效」时关闭输出。

## BGM

| ID | 场景 | 情绪 | 文件 | 循环 |
|----|------|------|------|------|
| bgm_menu | 主菜单等非店内 | 温暖、空灵 | `public/assets/audio/bgm_menu.wav` | 是 |
| bgm_shop | 经营中 | 略亮的木感琶音 | `public/assets/audio/bgm_shop.wav` | 是 |

## SFX

| ID | 触发 | 描述 | 文件 |
|----|------|------|------|
| sfx_click | 按钮（可扩展） | 轻点 | `sfx_click.wav` |
| sfx_accept | 接待客人 | 纸页/三角短音 | `sfx_accept.wav` |
| sfx_craft_ok | 转化完成 | 柔和铃感 | `sfx_craft_ok.wav` |
| sfx_rare | 珍稀品质/解锁 | 略亮泛音 | `sfx_rare.wav` |
| sfx_circulate | 上架/赠予 | 中音短促 | `sfx_circulate.wav` |
| sfx_day_end | 打烊 | 门铃远去感 | `sfx_day_end.wav` |

## 实现

1. `src/core/audio-manifest.ts` — 清单与 `audioPublicUrl`
2. `src/core/audio-bus.ts` — `SilentAudioBus` / `ProceduralAudioBus` / **`HybridAudioBus`**
3. `src/ui/sample-player.ts` — HTMLAudioElement（BGM 循环 + SFX）
4. `src/ui/beep.ts` — Web Audio tone 回退
5. 资产：`public/assets/audio/*.wav` + `LICENSE.txt`
6. 再生：`node scripts/generate-audio-assets.mjs`

## 许可

全部 WAV 为**项目脚本合成**（正弦/三角/软泛音），无第三方采样；见 `public/assets/audio/LICENSE.txt`。

## 现状

- 混合总线优先文件，缺失时回退程序化 tone
- 菜单 ↔ 店内切换 BGM（`bgm_menu` / `bgm_shop`）
- 未来可替换为更长真人演奏/CC0 素材而保持同一 id
