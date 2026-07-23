import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("static assets on disk", () => {
  it("关键美术文件存在且非空路径", () => {
    const files = [
      "public/assets/bg/menu_bg.jpg",
      "public/assets/bg/shop_bg.jpg",
      "public/assets/promo/cover.jpg",
      "public/assets/ui/vessels_sheet.jpg",
      "public/assets/audio/sfx_click.wav",
      "public/assets/audio/bgm_menu.wav",
      "public/assets/audio/LICENSE.txt",
      "public/assets/ui/order_board.jpg",
      "public/assets/ui/vessels_display.jpg",
      "public/assets/promo/keeper.jpg",
      "public/assets/bg/day_complete.jpg",
      "public/assets/ui/codex_empty.jpg",
      "public/assets/ui/tea_counter.jpg",
      "public/assets/decor/season_spring.jpg",
      "public/assets/bg/night_window.jpg",
      "public/assets/ui/corner_flourish.jpg",
      "public/assets/ui/doorbell.jpg",
      "public/assets/bg/rain_window.jpg",
      "public/assets/ui/shelf_display.jpg",
      "public/assets/ui/gift_station.jpg",
      "public/assets/ui/tutorial_book.jpg",
      "public/assets/ui/letter_seal.jpg",
      "public/assets/ui/closed_sign.jpg",
      "public/assets/decor/twin_lanterns.jpg",
      "public/assets/promo/guest_silhouette.jpg",
      "public/assets/ui/tip_jar.jpg",
      "public/assets/decor/morning_dew.jpg",
      "public/assets/ui/favor_board.jpg",
    ];
    for (const f of files) {
      const p = resolve(root, f);
      expect(existsSync(p), `missing ${f}`).toBe(true);
    }
  });

  it("入口与核心模块存在", () => {
    for (const f of ["index.html", "src/main.ts", "src/core/game.ts", "src/ui/app.ts"]) {
      expect(existsSync(resolve(root, f)), f).toBe(true);
    }
  });
});
