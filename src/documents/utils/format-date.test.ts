import { expect, test } from "vitest";
import { formatDate } from ".";

const tests = [
  [2021, "2021"],
  ["2021", "2021"],
  ["2021-2", "Feb 2021"],
  ["2021-02", "Feb 2021"],
  ["2021-02-01", "Feb 2021"],
  ["2021-", "2021"],
  ["2021-15", "Invalid Date 2021"],
  ["2021-0", "Invalid Date 2021"],
];

test("returns the right format", () => {
  for (const [input, expectation] of tests) {
    expect(formatDate(input)).toEqual(expectation);
  }
});
