/**
 * Snippet 050: Compress response with gzip
 * File: 50-gzip-response.js
 *
 * How to use:
 *   node snippets/50-gzip-response.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import http from "node:http";
import zlib from "node:zlib";

http.createServer((req, res) => {
  const gz = zlib.createGzip();
  res.writeHead(200, { "Content-Encoding": "gzip" });
  gz.pipe(res);
  gz.end("Compressed response!");
}).listen(3000, () => console.log("http://localhost:3000"));
