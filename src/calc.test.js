const calc = require("./calc.js");

//calc tests
describe("calc", () => {
  const { add, subtract, divide, multiply } = calc;

  test(".add should add two numbers toghether", () => {
    expect(add(5, 3)).toBe(8);
  });

  test(".subtract should subtract two numbers", () => {
    expect(subtract(3, 5)).toBe(-2);
  });

  test(".divide should divide first argument by the second", () => {
    expect(divide(5, 2)).toBeCloseTo(2.5);
  });

  test(".divide should return 'infinity' when division by zero", () => {
    expect(divide(3, 0)).toBe("infinity");
  });

  test("should work correctly with numbers in string format", () => {
    expect(add("5", "3")).toBe(8);
    expect(subtract("6", "7")).toBe(-1);
    expect(divide("5", "3")).toBeCloseTo(1.666);
    expect(multiply("5", "-3")).toBe(-15);
  });

  test("should return NaN with invalid arguments(other than numbers and numbers in string format)", () => {
    expect(add(3, "bunny")).toBe(NaN);
    expect(subtract(3, "bunny")).toBe(NaN);
    expect(multiply(3, "bunny")).toBe(NaN);
    expect(divide(3, "bunny")).toBe(NaN);
  });
});
