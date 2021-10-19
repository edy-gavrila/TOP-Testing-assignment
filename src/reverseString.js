function reverseString(str) {
  return str
    .split("")
    .map((_, idx) => str[str.length - idx - 1])
    .join("");
}

module.exports = reverseString;
