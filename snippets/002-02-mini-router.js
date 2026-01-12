/**
 * Snippet 002: Minimal server with routing (no frameworks)
 * File: 02-mini-router.js
 *
 * How to use:
 *   node snippets/02-mini-router.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import http from "node:http";

http.createServer((req, res) => {
  if (req.url === "/") return res.end("Home");
  if (req.url === "/health") return res.end("OK");
  res.writeHead(404);
  res.end("Not Found");
}).listen(3000, () => console.log("Listening on http://localhost:3000"));
