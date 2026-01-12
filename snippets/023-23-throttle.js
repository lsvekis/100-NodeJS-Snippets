/**
 * Snippet 023: Throttle a function
 * File: 23-throttle.js
 *
 * How to use:
 *   node snippets/23-throttle.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

export function throttle(fn, ms=200) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) { last = now; fn(...args); }
  };
}
