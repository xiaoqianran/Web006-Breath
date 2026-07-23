import { describe, it, expect } from "vitest";
import { SilentAudioBus, sfxForGameEvent } from "../src/core";

describe("audio bus", () => {
  it("静默总线记录调用且 isLive=false", () => {
    const bus = new SilentAudioBus();
    expect(bus.isLive()).toBe(false);
    bus.setVolume("sfx", 0.5);
    expect(bus.getVolume("sfx")).toBe(0.5);
    bus.playSfx("sfx_click");
    expect(bus.debugLastSfx()).toBe("sfx_click");
    bus.playBgm("bgm_menu");
    expect(bus.debugLastBgm()).toBe("bgm_menu");
    bus.stopBgm();
    expect(bus.debugLastBgm()).toBeNull();
  });

  it("音量钳制在 0–1", () => {
    const bus = new SilentAudioBus();
    bus.setVolume("master", 2);
    expect(bus.getVolume("master")).toBe(1);
    bus.setVolume("master", -1);
    expect(bus.getVolume("master")).toBe(0);
  });

  it("事件映射到文档中的 sfx id", () => {
    expect(sfxForGameEvent("accept")).toBe("sfx_accept");
    expect(sfxForGameEvent("rare")).toBe("sfx_rare");
    expect(sfxForGameEvent("day_end")).toBe("sfx_day_end");
  });
});
