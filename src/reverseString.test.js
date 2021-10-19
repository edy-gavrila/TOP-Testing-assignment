const reverseString = require("./reverseString");

//reverseString tests
describe("reverseString should", () => {
  test("take a string and returned reversed", () => {
    expect(reverseString("Random")).toMatch(/modnaR/);
  });

  test("take a string containing spaces and return it reversed", () => {
    expect(reverseString("test string")).toMatch(/gnirts tset/);
  });

  test("return an empty string if no argument passed", () => {
    expect(reverseString("")).toBe("");
  });
});
