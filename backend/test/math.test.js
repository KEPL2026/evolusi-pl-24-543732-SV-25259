import { test } from "node:test";
import { assertEquals } from "node:assert";
import { multiply } from "./math.js";

test("multiply two numbers", () => {
  const result = multiply(2, 3);
  assertEquals(result, 6);
});

test("multiply with zero", () => {
  const result = multiply(5, 0);
  assertEquals(result, 0);
});

test("multiply negative numbers", () => {
  const result = multiply(-2, -3);
  assertEquals(result, 6);
});
