/**
 * Snippet 049: Stream a large file download
 * File: 49-stream-file.js
 *
 * How to use:
 *   node snippets/49-stream-file.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import fs from "node:fs";
import http from "node:http";

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/octet-stream" });
  fs.createReadStream("big.zip").pipe(res);
}).listen(3000, () => console.log("Put big.zip in repo root then open http://localhost:3000"));
