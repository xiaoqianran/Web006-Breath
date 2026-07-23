import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { guestSilhouettePublicUrl, GUEST_SILHOUETTE_DISK } from "../src/core";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

describe("guest silhouette art", () => {
  it("公开路径与磁盘文件", () => {
    expect(guestSilhouettePublicUrl()).toBe("/assets/promo/guest_silhouette.jpg");
    expect(existsSync(resolve(root, GUEST_SILHOUETTE_DISK))).toBe(true);
  });
});
