# 资产清单（ASSET_MANIFEST）

| ID | 路径 | 用途 | 来源 | 尺寸 | 格式 | 透明 | 版本 | 状态 | 许可证 |
|----|------|------|------|------|------|------|------|------|--------|
| PH-001 | （CSS 渐变） | 页面底色 | 程序化 | - | CSS | - | 0.1 | active | 原创 |
| PH-002 | （Emoji 内联） | 形态图标占位 | 程序化 | - | Unicode | - | 0.1 | active | 原创 |
| ART-001 | `public/assets/bg/menu_bg.jpg` | 主菜单英雄图 | Imagine 原创生成 | 约 16:9 | JPG | 否 | 0.1 | active | 原创 |

### ART-001 详情

- 提示词：soft watercolor cozy literary emotion shop, afternoon lace light, dried flowers teacups paper notes, sage green paper white blush pink, no text
- 导入：CSS `url("/assets/bg/menu_bg.jpg")` 于 `.menu-hero`
- 验收：主菜单可见插画区域；构建后 `dist/assets` 旁 public 资源可访问

| ART-002 | `public/assets/ui/vessels_sheet.jpg` | 形态概念条 | Imagine | 16:9 | JPG | 否 | 0.1 | active | 原创 |
| ART-003 | `public/assets/bg/shop_bg.jpg` | 店内经营背景 | Imagine | 16:9 | JPG | 否 | 0.1 | active | 原创 |

游戏内交互图标使用 `src/ui/icons.ts` 内联 SVG（可测、可缩放）；sheet 供图鉴/宣传参考。

### ART-003

- 用途：经营界面氛围底图（半透明遮罩保可读性）
- 接入：`#app.shop-theme::before`

| ART-004 | `public/assets/promo/cover.jpg` | 宣传/答辩封面 | Imagine | 16:9 1280×720 | JPG | 否 | 0.1 | active | 原创 |

## 音频（AUD）

| ID | 路径 | 用途 | 来源 | 格式 | 循环 | 状态 | 许可证 |
|----|------|------|------|------|------|------|--------|
| AUD-SFX-* | `public/assets/audio/sfx_*.wav` | UI/反馈 | 脚本合成 | WAV mono 22.05k | 否 | active | 原创 |
| AUD-BGM-menu | `public/assets/audio/bgm_menu.wav` | 主菜单 BGM | 脚本合成 | WAV | 是 | active | 原创 |
| AUD-BGM-shop | `public/assets/audio/bgm_shop.wav` | 店内 BGM | 脚本合成 | WAV | 是 | active | 原创 |

- 清单源码：`src/core/audio-manifest.ts`
- 再生：`node scripts/generate-audio-assets.mjs`
- 许可文件：`public/assets/audio/LICENSE.txt`

| ART-005 | `public/assets/ui/order_board.jpg` | 委托告示板 | Imagine | 16:9 | JPG | 否 | 0.2.4 | active | 原创 |
| ART-006 | `public/assets/ui/vessels_display.jpg` | 五形态展示 | Imagine | 16:9 | JPG | 否 | 0.2.4 | active | 原创 |
| ART-007 | `public/assets/promo/keeper.jpg` | 掌灯人剪影 | Imagine | 3:4 | JPG | 否 | 0.2.4 | active | 原创 |

接入：`.order-board-art` / `.vessels-display` / `.keeper-portrait`（关于页与店内委托卡）。

| ART-008 | `public/assets/bg/day_complete.jpg` | 打烊窗景 | Imagine | 16:9 | JPG | 否 | 0.2.5 | active | 原创 |
| ART-009 | `public/assets/ui/codex_empty.jpg` | 图鉴空态 | Imagine | 16:9 | JPG | 否 | 0.2.5 | active | 原创 |
| ART-010 | `public/assets/ui/tea_counter.jpg` | 接待茶台 | Imagine | 16:9 | JPG | 否 | 0.2.5 | active | 原创 |
| ART-011 | `public/assets/decor/season_spring.jpg` | 春日店饰横幅 | Imagine | 16:9 | JPG | 否 | 0.2.5 | active | 原创 |


| ART-012 | `public/assets/bg/night_window.jpg` | 夜窗店内氛围 | Imagine | 16:9 | JPG | 否 | 0.2.5 | active | 原创 |

| ART-013 | `public/assets/ui/doorbell.jpg` | 页脚门铃 | Imagine | 1:1 | JPG | 否 | 0.2.5 | active | 原创 |
| ART-014 | `public/assets/ui/corner_flourish.jpg` | 订单卡角饰 | Imagine | 1:1 | JPG | 否 | 0.2.5 | active | 原创 |

| ART-015 | `public/assets/ui/gift_station.jpg` | 转化台包装 | Imagine | 16:9 | JPG | 否 | 0.2.5 | active | 原创 |
| ART-016 | `public/assets/bg/rain_window.jpg` | 雨窗店内 | Imagine | 16:9 | JPG | 否 | 0.2.5 | active | 原创 |

| ART-017 | `public/assets/ui/tutorial_book.jpg` | 教程册页 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-018 | `public/assets/ui/letter_seal.jpg` | 瞬间信笺 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
