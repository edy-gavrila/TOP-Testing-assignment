function caesar(str, offset = 0) {
  if (!offset || !Number.isInteger(offset)) {
    return str;
  }

  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const digits = "0123456789".split("");

  return (
    str
      //convert to array
      .split("")
      //map returns the converted array. all the actions happens in the callback for map
      .map((char) => {
        let symbolSet = null;

        //find out what simbol set to use (separate for lowercase, uppercase and numbers)
        if (lowerCaseLetters.findIndex((el) => el === char) >= 0) {
          symbolSet = lowerCaseLetters;
        } else if (upperCaseLetters.findIndex((el) => el === char) >= 0) {
          symbolSet = upperCaseLetters;
        } else if (digits.findIndex((el) => el === char) >= 0) {
          symbolSet = digits;
        }

        //if character not in the set of symbols, return it unchanged
        if (!symbolSet) {
          return char;
        }

        const symbolSetLength = symbolSet.length;
        const indexInSymbolSet = symbolSet.findIndex((el) => el === char);
        //wrap large integers
        const constrainedOffset = offset % symbolSetLength;

        const absoluteIndex = indexInSymbolSet + constrainedOffset;

        //wrap around the last value in the symbol set
        //if no wrapping:
        if (absoluteIndex < symbolSetLength && absoluteIndex >= 0) {
          return symbolSet[indexInSymbolSet + constrainedOffset];
          //if negative wrapping
        } else if (absoluteIndex < 0) {
          const negativeWrappedOffset = symbolSetLength + absoluteIndex;
          return symbolSet[negativeWrappedOffset];
        }

        //if positive wrapping
        const wrappedOffset =
          indexInSymbolSet + constrainedOffset - symbolSetLength;
        return symbolSet[wrappedOffset];
      })
      //convert back to string
      .join("")
  );
}

module.exports = caesar;
