/**
 * Snippet 006: Return JSON response
 * File: 06-json-response.js
 *
 * How to use:
 *   node snippets/06-json-response.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import http from "node:http";

http.createServer((req, res) => {
  const payload = { ok: true, time: new Date().toISOString() };
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(payload));
}).listen(3000, () => console.log("http://localhost:3000"));
