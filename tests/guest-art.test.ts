import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  guestSilhouettePublicUrl,
  GUEST_SILHOUETTE_DISK,
  GUEST_PORTRAIT_DISK,
  GUEST_PORTRAIT_VARIANTS,
  hashGuestName,
  guestPortraitVariantIndex,
  guestPortraitPublicUrl,
  guestPortraitDataAttr,
  guestPortraitAriaLabel,
} from "../src/core";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("guest silhouette art", () => {
  it("公开路径与磁盘文件", () => {
    expect(guestSilhouettePublicUrl()).toBe("/assets/promo/guest_silhouette.jpg");
    expect(existsSync(resolve(root, GUEST_SILHOUETTE_DISK))).toBe(true);
  });

  it("四套肖像变体文件均存在", () => {
    expect(GUEST_PORTRAIT_VARIANTS.length).toBe(4);
    for (const disk of GUEST_PORTRAIT_DISK) {
      expect(existsSync(resolve(root, disk)), disk).toBe(true);
    }
  });

  it("同名确定性选图，异名可分散", () => {
    expect(hashGuestName("林晚")).toBe(hashGuestName("林晚"));
    expect(guestPortraitVariantIndex("林晚")).toBe(guestPortraitVariantIndex("林晚"));
    const url = guestPortraitPublicUrl("林晚");
    expect(GUEST_PORTRAIT_VARIANTS as readonly string[]).toContain(url);
    expect(guestPortraitDataAttr("阿澄")).toMatch(/^v[0-3]$/);
    expect(guestPortraitAriaLabel("禾")).toContain("禾");
    // 空名回落
    expect(guestPortraitPublicUrl("")).toBeTruthy();
  });
});
