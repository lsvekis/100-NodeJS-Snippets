/**
 * Snippet 061: Sleep helper
 * File: 61-sleep.js
 *
 * How to use:
 *   node snippets/61-sleep.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

await new Promise(r => setTimeout(r, 50));
console.log("done");
