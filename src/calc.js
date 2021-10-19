const calc = {
  add: (a = 0, b = 0) => {
    const numA = Number(a);
    const numB = Number(b);

    return numA + numB;
  },

  subtract: (a = 0, b = 0) => {
    const numA = Number(a);
    const numB = Number(b);

    return numA - numB;
  },

  divide: (a, b) => {
    const numA = Number(a);
    const numB = Number(b);
    if (numB === 0) {
      return "infinity";
    }
    return numA / numB;
  },

  multiply: (a, b) => {
    const numA = Number(a);
    const numB = Number(b);

    return numA * numB;
  },
};

module.exports = calc;
