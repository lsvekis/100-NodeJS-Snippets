/**
 * Snippet 088: Once helper
 * File: 87-once.js
 *
 * How to use:
 *   node snippets/87-once.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function once(fn) {
  let done = false, val;
  return (...args) => (done ? val : (done=true, val=fn(...args)));
}

const init = once(() => ({ started: Date.now() }));
console.log(init());
console.log(init());
