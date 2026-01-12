/**
 * Snippet 020: Measure performance timing
 * File: 20-console-time.js
 *
 * How to use:
 *   node snippets/20-console-time.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

console.time("job");
await new Promise(r => setTimeout(r, 250));
console.timeEnd("job");
