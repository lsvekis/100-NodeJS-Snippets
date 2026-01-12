/**
 * Snippet 025: Promise timeout wrapper
 * File: 25-promise-timeout.js
 *
 * How to use:
 *   node snippets/25-promise-timeout.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

export function withTimeout(promise, ms=2000) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej(new Error("Timeout")), ms))
  ]);
}
