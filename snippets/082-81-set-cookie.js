/**
 * Snippet 082: Set a cookie header (http server)
 * File: 81-set-cookie.js
 *
 * How to use:
 *   node snippets/81-set-cookie.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import http from "node:http";

http.createServer((req, res) => {
  res.setHeader("Set-Cookie", "session=abc123; HttpOnly; Path=/; SameSite=Lax");
  res.end("Cookie set");
}).listen(3000, () => console.log("http://localhost:3000"));
