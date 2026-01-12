/**
 * Snippet 022: Debounce a function
 * File: 22-debounce.js
 *
 * How to use:
 *   node snippets/22-debounce.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

export function debounce(fn, ms=200) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}
