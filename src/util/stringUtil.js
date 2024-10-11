/**
 * calculate the sum of the numbers provided in given input string by following below rules
 *
 * - If the input string is empty, return 0.
 * - Numbers can be separated by either commas (,) or new lines (\n).
 * - Throws an error if any negative numbers are present with all negative values comma separated.
 *
 * @param {string} input - string formated numbers separated by (,) or new line (\n)
 * @returns {number} - The sum of the numbers in the input string.
 * @throws Will throw an error if there are negative numbers in the input string.
 */
function add(input) {
  // Check if the input is an empty string, and return 0 if empty.
  if (!input) {
    return 0;
  } else {
    // regex for matching the delimiter, i.e either commas or new lines.
    const delimiter = /[,\n]/;

    // split the string with delimiter and convert into Number (map uses Number format)
    const numbers = input.split(delimiter).map(Number);

    // find the negative values if any and creates a new array
    const negatives = numbers.filter((num) => num < 0);

    // throw expection if any negative numbers present
    if (negatives.length) {
      throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
    } else {
      // if no negative values present, calculate the sum of all numbers and return
      return numbers.reduce((sum, num) => sum + num, 0);
    }
  }
}

module.exports = { add };
