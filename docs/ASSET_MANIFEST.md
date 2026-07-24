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

| ART-019 | `public/assets/ui/closed_sign.jpg` | 打烊门牌 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-020 | `public/assets/decor/twin_lanterns.jpg` | 双灯巷口 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-021 | `public/assets/promo/guest_silhouette.jpg` | 客人剪影 | Imagine | 3:4 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-022 | `public/assets/ui/favor_board.jpg` | 好感留言板 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-023 | `public/assets/ui/tip_jar.jpg` | 温情小罐 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-024 | `public/assets/decor/morning_dew.jpg` | 晨露门铃 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-025 | `public/assets/bg/revisit_door.jpg` | 再访门廊 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-026 | `public/assets/bg/puddle_glow.jpg` | 雨洼反光 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-027 | `public/assets/bg/half_window.jpg` | 半开的窗 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-028 | `public/assets/ui/day_calendar.jpg` | 今日日历装饰 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-029 | `public/assets/ui/storybooks.jpg` | 故事书叠 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-030 | `public/assets/bg/evening_market.jpg` | 晚市灯 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-031 | `public/assets/promo/full_moon.jpg` | 满月掌灯 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-032 | `public/assets/bg/street_lamp.jpg` | 巷口路灯 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-033 | `public/assets/ui/unlock_medal.jpg` | 纪念徽章 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-034 | `public/assets/ui/progress_ribbon.jpg` | 进度丝带 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-035 | `public/assets/ui/paper_stamp.jpg` | 日记印章 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-036 | `public/assets/bg/wind_curtain.jpg` | 风掀窗帘 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-037 | `public/assets/decor/signpost.jpg` | 路牌 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-038 | `public/assets/ui/heart_charm.jpg` | 连心小饰 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-039 | `public/assets/ui/match_abacus.jpg` | 匹配算珠 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-040 | `public/assets/ui/quality_seal.jpg` | 品质印记 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-041 | `public/assets/ui/tea_tray.jpg` | 茶盘 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-042 | `public/assets/bg/rain_awning.jpg` | 雨棚 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-043 | `public/assets/ui/intensity_meter.jpg` | 强度丝带 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-044 | `public/assets/ui/guest_notebook.jpg` | 客人手记 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-045 | `public/assets/decor/soft_blanket.jpg` | 薄被 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-046 | `public/assets/bg/forty_lanterns.jpg` | 四十盏灯 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-047 | `public/assets/ui/sugar_bowl.jpg` | 糖罐 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-048 | `public/assets/ui/circulation_log.jpg` | 流通手账 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-049 | `public/assets/ui/gift_tag.jpg` | 心意吊牌 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-050 | `public/assets/ui/fountain_pen.jpg` | 钢笔 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-051 | `public/assets/ui/journal_page.jpg` | 手账页 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |

| ART-052 | `public/assets/ui/chalkboard.jpg` | 提示板 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-053 | `public/assets/ui/warmth_jar.jpg` | 温存罐 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-054 | `public/assets/ui/welcome_bell.jpg` | 迎客门铃 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-055 | `public/assets/bg/warmth_corner.jpg` | 温存一隅 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-056 | `public/assets/promo/guest_a.jpg` | 客人剪影 A | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-057 | `public/assets/promo/guest_b.jpg` | 客人剪影 B | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-058 | `public/assets/promo/guest_c.jpg` | 客人剪影 C | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-059 | `public/assets/ui/order_counter.jpg` | 委托柜台 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-060 | `public/assets/bg/night_rain_window.jpg` | 夜雨窗 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-061 | `public/assets/ui/shelf_craft.jpg` | 货架小物 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-062 | `public/assets/ui/tea_cup.jpg` | 茶杯 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-063 | `public/assets/ui/vessel_flower.jpg` | 花形态 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-064 | `public/assets/ui/vessel_art.jpg` | 画形态 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-065 | `public/assets/ui/vessel_music.jpg` | 音乐形态 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-066 | `public/assets/ui/codex_scrap.jpg` | 图鉴手账 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-067 | `public/assets/ui/codex_ribbon.jpg` | 图鉴丝带书签 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-068 | `public/assets/bg/menu_hero.jpg` | 主菜单门廊 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-069 | `public/assets/ui/unlock_ribbon.jpg` | 解锁丝带徽章 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-070 | `public/assets/decor/window_seat.jpg` | 窗边座位 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-071 | `public/assets/ui/price_tag.jpg` | 温情价签 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-072 | `public/assets/promo/guest_d.jpg` | 客人剪影 D | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-073 | `public/assets/decor/umbrella_stand.jpg` | 伞架 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-074 | `public/assets/ui/moment_letter.jpg` | 瞬间信笺 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-075 | `public/assets/bg/puddle_dusk.jpg` | 暮色水洼 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-076 | `public/assets/ui/writing_desk.jpg` | 写字台 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-077 | `public/assets/ui/settings_knob.jpg` | 设置旋钮 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-078 | `public/assets/decor/paper_cranes.jpg` | 千纸鹤 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-079 | `public/assets/ui/tutorial_spread.jpg` | 教程展开页 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-080 | `public/assets/ui/welcome_doorbell.jpg` | 迎客门铃铃铛 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-081 | `public/assets/bg/evening_lanterns.jpg` | 晚市灯巷 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-082 | `public/assets/ui/gift_box.jpg` | 礼物盒 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-083 | `public/assets/ui/ribbon_spools.jpg` | 丝带卷 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-084 | `public/assets/promo/guest_e.jpg` | 客人剪影 E | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-085 | `public/assets/ui/codex_catalog.jpg` | 图鉴目录 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-086 | `public/assets/ui/music_box.jpg` | 音乐盒 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-087 | `public/assets/bg/rain_shop_awning.jpg` | 雨棚湿街 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-088 | `public/assets/ui/save_drawer.jpg` | 存档抽屉 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-089 | `public/assets/ui/day_page.jpg` | 日历页 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-090 | `public/assets/ui/twin_cups.jpg` | 双杯茶盘 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-091 | `public/assets/decor/soft_suitcase.jpg` | 再访小行李箱 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-092 | `public/assets/ui/paper_lantern.jpg` | 纸灯 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-093 | `public/assets/ui/guest_book.jpg` | 柜台留言簿 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-094 | `public/assets/ui/spice_jars.jpg` | 茶糖小罐 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-095 | `public/assets/ui/wind_chime.jpg` | 风铃 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-096 | `public/assets/decor/shop_cat.jpg` | 店猫 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-097 | `public/assets/ui/postcards.jpg` | 明信片叠 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-098 | `public/assets/ui/shop_key.jpg` | 店钥匙 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-099 | `public/assets/bg/shutters_light.jpg` | 百叶窗光 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-100 | `public/assets/ui/moon_calendar.jpg` | 月相盘 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-101 | `public/assets/bg/evening_window.jpg` | 暮色橱窗 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-102 | `public/assets/ui/soft_compass.jpg` | 温柔罗盘 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-103 | `public/assets/ui/street_map.jpg` | 巷口地图 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-104 | `public/assets/ui/hourglass.jpg` | 沙漏 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-105 | `public/assets/ui/ink_seal.jpg` | 朱砂印鉴 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-106 | `public/assets/ui/vessel_tray.jpg` | 成品托盘 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-107 | `public/assets/ui/soft_candle.jpg` | 柜台烛火 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-108 | `public/assets/ui/wish_tags.jpg` | 梁上祈愿签 | Imagine | 16:9 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-109 | `public/assets/ui/rain_curtain.jpg` | 雨门帘 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
| ART-110 | `public/assets/ui/steam_cup.jpg` | 热茶杯 | Imagine | 1:1 | JPG | 否 | 0.2.6 | active | 原创 |
