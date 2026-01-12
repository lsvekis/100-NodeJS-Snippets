/**
 * Snippet 047: Simple in-memory cache
 * File: 47-in-memory-cache.js
 *
 * How to use:
 *   node snippets/47-in-memory-cache.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const cache = new Map();

function getCached(key, compute) {
  if (cache.has(key)) return cache.get(key);
  const val = compute();
  cache.set(key, val);
  return val;
}

console.log(getCached("x", () => Math.random()));
console.log(getCached("x", () => Math.random())); // same as above
