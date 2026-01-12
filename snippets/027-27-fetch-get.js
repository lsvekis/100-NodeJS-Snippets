/**
 * Snippet 027: HTTP GET with fetch
 * File: 27-fetch-get.js
 *
 * How to use:
 *   node snippets/27-fetch-get.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const res = await fetch("https://api.github.com");
console.log(res.status);
console.log((await res.text()).slice(0, 200));
