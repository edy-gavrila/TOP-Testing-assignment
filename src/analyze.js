function analyze(arr = []) {
  if (arr.constructor !== Array) {
    throw Error("Data passes is not an array");
  }
  const average = arr.reduce((prev, current) => prev + current, 0) / arr.length;
  const min = arr.reduce(
    (prev, current) => (current < prev ? current : prev),
    arr[0]
  );
  const max = arr.reduce(
    (prev, current) => (current > prev ? current : prev),
    arr[0]
  );

  return { average, min, max, length: arr.length };
}

module.exports = analyze;
