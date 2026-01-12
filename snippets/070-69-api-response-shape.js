/**
 * Snippet 070: Standard API response shape
 * File: 69-api-response-shape.js
 *
 * How to use:
 *   node snippets/69-api-response-shape.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const result = { items: [1,2,3] };
const requestId = "req_" + Math.random().toString(16).slice(2);
console.log({ data: result, error: null, meta: { requestId } });
