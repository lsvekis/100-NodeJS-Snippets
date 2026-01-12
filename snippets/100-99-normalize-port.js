/**
 * Snippet 100: Validate/normalize a port
 * File: 99-normalize-port.js
 *
 * How to use:
 *   node snippets/99-normalize-port.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function normalizePort(v) {
  const p = Number(v);
  return Number.isInteger(p) && p > 0 && p < 65536 ? p : 3000;
}
console.log(normalizePort(process.env.PORT));
