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
      "public/assets/bg/revisit_door.jpg",
      "public/assets/bg/puddle_glow.jpg",
      "public/assets/bg/half_window.jpg",
      "public/assets/ui/day_calendar.jpg",
      "public/assets/ui/storybooks.jpg",
      "public/assets/bg/evening_market.jpg",
      "public/assets/promo/full_moon.jpg",
      "public/assets/bg/street_lamp.jpg",
      "public/assets/ui/progress_ribbon.jpg",
      "public/assets/ui/paper_stamp.jpg",
      "public/assets/bg/wind_curtain.jpg",
      "public/assets/decor/signpost.jpg",
      "public/assets/ui/heart_charm.jpg",
      "public/assets/ui/quality_seal.jpg",
      "public/assets/ui/tea_tray.jpg",
      "public/assets/bg/rain_awning.jpg",
      "public/assets/ui/intensity_meter.jpg",
      "public/assets/decor/soft_blanket.jpg",
      "public/assets/bg/forty_lanterns.jpg",
      "public/assets/ui/sugar_bowl.jpg",
      "public/assets/ui/gift_tag.jpg",
      "public/assets/ui/fountain_pen.jpg",
      "public/assets/ui/journal_page.jpg",
      "public/assets/ui/chalkboard.jpg",
      "public/assets/ui/circulation_log.jpg",
      "public/assets/ui/guest_notebook.jpg",
      "public/assets/ui/match_abacus.jpg",
      "public/assets/ui/unlock_medal.jpg",
      "public/assets/ui/favor_board.jpg",
      "public/assets/ui/warmth_jar.jpg",
      "public/assets/ui/welcome_bell.jpg",
      "public/assets/bg/warmth_corner.jpg",
      "public/assets/promo/guest_a.jpg",
      "public/assets/promo/guest_b.jpg",
      "public/assets/promo/guest_c.jpg",
      "public/assets/ui/order_counter.jpg",
      "public/assets/bg/night_rain_window.jpg",
      "public/assets/ui/shelf_craft.jpg",
      "public/assets/ui/tea_cup.jpg",
      "public/assets/ui/vessel_flower.jpg",
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
