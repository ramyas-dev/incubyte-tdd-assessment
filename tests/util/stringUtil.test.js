const { add } = require("../../src/util/stringUtil");

test("should return 0 if empty string", () => {
  const result = add("");
  expect(result).toBe(0);
});

test("should return sum of numbers if separated with comma", () => {
  const result = add("1,2");
  expect(result).toBe(3);
});

test("should return sum of numbers if separated with comma or \n also as delimiter", () => {
  const result = add("1,2\n3,4\n5");
  expect(result).toBe(15);
});

test("should throw expection when netgative value present", () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test("should throw expection when more than one negative value present", () => {
  expect(() => add("1,-2,-3,4")).toThrow("negative numbers not allowed: -2,-3");
});
