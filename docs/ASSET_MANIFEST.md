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
EOF
