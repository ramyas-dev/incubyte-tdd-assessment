const { add } = require("../../src/util/stringUtil");

test("should return 0 if empty string", () => {
  const result = add("");
  expect(result).toBe(0);
});
