function add(input) {
  if (!input) {
    return 0;
  } else {
    const delimiter = /[,\n]/;
    const numbers = input.split(delimiter).map(Number);
    const negatives = numbers.filter((num) => num < 0);

    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    } else {
      return numbers.reduce((sum, num) => sum + num, 0);
    }
  }
}

module.exports = { add };
