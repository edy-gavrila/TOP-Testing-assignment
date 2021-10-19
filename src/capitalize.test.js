const capitalize = require("./capitalize");

describe("capitalize should", () => {
  test("return argument in with capital first letter", () => {
    expect(capitalize("test")).toMatch(/Test/);
  });

  test("return mixed case argument captalized", () => {
    expect(capitalize("BooHoo")).toMatch(/Boohoo/);
  });

  test("return capitalized argument unchanged", () => {
    expect(capitalize("Test")).toMatch(/Test/);
  });

  test("return an empty string when called with no arguments", () => {
    expect(capitalize()).toBe("");
  });

  test("return string containing spaces correctly capitalized", () => {
    expect(capitalize("this is a test string")).toMatch(
      /This is a test string/
    );
  });
});
