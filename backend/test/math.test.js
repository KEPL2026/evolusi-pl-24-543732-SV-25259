import { test } from "node:test";
import assert from "node:assert";
import { multiply } from "./math.js";

test("multiply function", () => {
  assert.strictEqual(multiply(2, 3), 6);
  assert.strictEqual(multiply(-1, 5), -5);
  assert.strictEqual(multiply(0, 10), 0);
});
