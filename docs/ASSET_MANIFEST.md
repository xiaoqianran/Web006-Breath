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
EOF
