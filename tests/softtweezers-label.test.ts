import { describe, expect, it } from "vitest";
import {
  formatSoftTweezersLine,
  formatJewelLoupeLine,
  formatSofttweezersAside,
  formatSofttweezersEncourage,
  formatSofttweezersPair,
} from "../src/core/softtweezers-label";

describe("softtweezers-label", () => {
  it("五函数按阈值分支且非空", () => {
    expect(formatSoftTweezersLine(1).length).toBeGreaterThan(4);
    expect(formatSoftTweezersLine(2)).toMatch(/镊|细|夹|粒|硬/);
    expect(formatJewelLoupeLine(0)).toMatch(/放|大|镜|合|温存|看|眼/);
    expect(formatJewelLoupeLine(15)).toMatch(/镜|细|店|看|清/);
    expect(formatSofttweezersAside(0)).toMatch(/镊|空|流通|夹|稳/);
    expect(formatSofttweezersAside(12)).toMatch(/12|夹|许|可|温柔/);
    expect(formatSofttweezersAside(30)).toMatch(/30|逾|轻夹|细/);
    expect(formatSofttweezersEncourage(0)).toMatch(/镊|放大|镜|细|小|看/);
    expect(formatSofttweezersEncourage(2)).toMatch(/镜|看|夹|流通|准/);
    expect(formatSofttweezersEncourage(5)).toMatch(/镜|合|夹|松|眼/);
    const pair = formatSofttweezersPair(3, 20);
    expect(pair).toContain(formatSoftTweezersLine(3));
    expect(pair).toContain(formatJewelLoupeLine(20));
  });
});
