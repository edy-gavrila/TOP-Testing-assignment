const caesar = require("./caesar");

//caesar tests
describe("caesar", () => {
  test("should encode a string to a caesar cyphertext", () => {
    expect(caesar("abcdef", 3)).toMatch(/defghi/);
  });

  test("should leave punctuation unchanged", () => {
    expect(caesar("a.b,c:d", 3)).toMatch(/d.e,f:g/);
  });

  test("should keep the same case when encoding", () => {
    expect(caesar("aBcdEF", 3)).toMatch(/dEfgHI/);
  });

  test("should wrap around from z to a", () => {
    expect(caesar("VWXYZ", 12)).toMatch(/HIJKL/);
  });
  test("should wrap around from z to a", () => {
    expect(caesar("z", 1)).toEqual("a");
  });

  test("should wrap around from 9 to 0", () => {
    expect(caesar("a8b9c0", 3)).toEqual("d1e2f3");
  });

  test("should work correctly when working with negative offsets", () => {
    expect(caesar("def", -3)).toEqual("abc");
  });

  test("should work correctly when working with negative offsets", () => {
    expect(caesar("abc", -3)).toEqual("xyz");
  });

  test("should return the original string when used with the negative of the offset used to encode the string", () => {
    expect(caesar(caesar("test05", 5), -5)).toEqual("test05");
  });

  test("should return the original string when a invalid(missing or non-integer) offset is given", () => {
    expect(caesar("Eduard Gavrila")).toEqual("Eduard Gavrila");
  });

  test("should work with large positive and negative integers for offsets", () => {
    expect(caesar("abcde", 29)).toEqual("defgh");
    expect(caesar("abcde", 26)).toEqual("abcde");
    expect(caesar("abcde", -28)).toEqual("yzabc");
    expect(caesar("abcde", 53)).toEqual("bcdef");
    expect(caesar(caesar("abcde", 53), -53)).toEqual("abcde");
    expect(caesar("Eduard Gavrila", 400)).toEqual("Onekbn Qkfbsvk");
    expect(caesar("Eduard Gavrila", -400)).toEqual("Utkqht Wqlhybq");
  });
});
