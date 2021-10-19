const analyze = require("./analyze");

describe("analyze should", () => {
  test("return an object", () => {
    expect(typeof analyze([1, 8, 3, 4, 2, 6])).toEqual("object");
  });

  test("have all required properties", () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toHaveProperty("average");
    expect(analyze([1, 8, 3, 4, 2, 6])).toHaveProperty("min");
    expect(analyze([1, 8, 3, 4, 2, 6])).toHaveProperty("max");
    expect(analyze([1, 8, 3, 4, 2, 6])).toHaveProperty("length");
  });

  test("return the correct values", () => {
    expect(analyze([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
    expect(analyze([2, 4, 6, 8, 10, 12])).toEqual({
      average: 7,
      min: 2,
      max: 12,
      length: 6,
    });
  });

  test("throw an error if an array is not passed", () => {
    expect(() => analyze("not an array")).toThrow(
      "Data passes is not an array"
    );
  });
});
