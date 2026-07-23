/**
 * 客人剪影资源（纯函数，可单测）
 * 默认剪影 + 多套变体，按姓名确定性选取。
 */

export const GUEST_SILHOUETTE_PATH = "/assets/promo/guest_silhouette.jpg";
export const GUEST_SILHOUETTE_DISK = "public/assets/promo/guest_silhouette.jpg";

/** 客人肖像变体（相对 public 的 URL） */
export const GUEST_PORTRAIT_VARIANTS = [
  "/assets/promo/guest_silhouette.jpg",
  "/assets/promo/guest_a.jpg",
  "/assets/promo/guest_b.jpg",
  "/assets/promo/guest_c.jpg",
] as const;

export const GUEST_PORTRAIT_DISK = [
  "public/assets/promo/guest_silhouette.jpg",
  "public/assets/promo/guest_a.jpg",
  "public/assets/promo/guest_b.jpg",
  "public/assets/promo/guest_c.jpg",
] as const;

export type GuestPortraitVariantId = 0 | 1 | 2 | 3;

export function guestSilhouettePublicUrl(): string {
  return GUEST_SILHOUETTE_PATH;
}

/** 简单字符串哈希（确定性、无 DOM） */
export function hashGuestName(name: string): number {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (Math.imul(31, h) + name.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

/** 按客人姓名选肖像变体下标 */
export function guestPortraitVariantIndex(guestName: string): GuestPortraitVariantId {
  const n = GUEST_PORTRAIT_VARIANTS.length;
  return (hashGuestName(guestName || "匿名") % n) as GuestPortraitVariantId;
}

/** 公开 URL */
export function guestPortraitPublicUrl(guestName: string): string {
  return GUEST_PORTRAIT_VARIANTS[guestPortraitVariantIndex(guestName)]!;
}

/** data-guest-art 属性值（CSS 钩子） */
export function guestPortraitDataAttr(guestName: string): string {
  return `v${guestPortraitVariantIndex(guestName)}`;
}

/** 读屏用简短说明 */
export function guestPortraitAriaLabel(guestName: string): string {
  const name = guestName?.trim() || "客人";
  return `${name}的剪影`;
}
