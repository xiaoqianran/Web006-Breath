import { describe, it, expect } from "vitest";
import { groupByKey } from "../src/core";

describe("groupByKey", () => {
  it("按 key 分组", () => {
    const g = groupByKey(
      [
        { t: "a", v: 1 },
        { t: "b", v: 2 },
        { t: "a", v: 3 },
      ],
      (x) => x.t,
    );
    expect(g.a).toHaveLength(2);
    expect(g.b).toHaveLength(1);
  });
});
