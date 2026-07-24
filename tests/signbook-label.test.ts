import { describe, expect, it } from "vitest";
import {
  formatSoftSignBookLine,
  formatGraphitePencilLine,
  formatSignbookAside,
  formatSignbookEncourage,
  formatSignbookPair,
} from "../src/core/signbook-label";

describe("signbook-label", () => {
  it("formats soft sign book, graphite pencil, aside, encourage and pair", () => {
    expect(formatSoftSignBookLine(1).length).toBeGreaterThan(4);
    expect(formatSoftSignBookLine(2)).toMatch(/本|软|装|行|压|人|簿/);
    expect(formatGraphitePencilLine(0)).toMatch(/笔|削|温存|写|石|墨/);
    expect(formatGraphitePencilLine(15)).toMatch(/笔|簿|店|温|行|页|落/);
    expect(formatSignbookAside(0)).toMatch(/簿|空|流通|行|写|到/);
    expect(formatSignbookAside(5)).toContain("5");
    expect(formatSignbookEncourage(0)).toMatch(/留|言|簿|笔|写|行/);
    expect(formatSignbookPair(1, 10)).toMatch(/簿|笔|留|言|石/);
  });
});
