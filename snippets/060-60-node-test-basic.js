/**
 * Snippet 060: Basic unit test with node:test
 * File: 60-node-test-basic.js
 *
 * How to use:
 *   node snippets/60-node-test-basic.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import test from "node:test";
import assert from "node:assert/strict";

test("adds numbers", () => {
  assert.equal(2 + 3, 5);
});
