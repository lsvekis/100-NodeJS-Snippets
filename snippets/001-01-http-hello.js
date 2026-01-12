/**
 * Snippet 001: Basic “Hello World” HTTP server
 * File: 01-http-hello.js
 *
 * How to use:
 *   node snippets/01-http-hello.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import http from "node:http";

http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end("Hello from Node!\n");
}).listen(3000, () => console.log("Listening on http://localhost:3000"));
