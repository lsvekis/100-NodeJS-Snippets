/**
 * Snippet 029: POST JSON with fetch
 * File: 29-fetch-post-json.js
 *
 * How to use:
 *   node snippets/29-fetch-post-json.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const res = await fetch("https://httpbin.org/post", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Lars" })
});
console.log(res.status);
