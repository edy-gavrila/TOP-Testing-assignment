function capitalize(str = "") {
  if (str.length === 0) {
    return str;
  }
  strArray = str.toLowerCase().split("");
  strArray[0] = strArray[0].toUpperCase();

  return strArray.join("");
}

module.exports = capitalize;
