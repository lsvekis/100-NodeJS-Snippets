/**
 * Snippet 030: URL building safely
 * File: 30-url-builder.js
 *
 * How to use:
 *   node snippets/30-url-builder.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const u = new URL("https://example.com/search");
u.searchParams.set("q", "node js");
u.searchParams.set("page", "2");
console.log(u.toString());
