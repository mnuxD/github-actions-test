import { sum } from "../operations.js";

describe("test operation module", () => {
  it("should solver a sum", () => {
    const value = sum("1", "3");
    console.log(value, typeof value);
    expect(value).toBe(4);
  });
});
