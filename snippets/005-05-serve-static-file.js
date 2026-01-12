/**
 * Snippet 005: Serve a static file via stream
 * File: 05-serve-static-file.js
 *
 * How to use:
 *   node snippets/05-serve-static-file.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import http from "node:http";
import fs from "node:fs";
import path from "node:path";

http.createServer((req, res) => {
  if (req.url === "/") {
    const filePath = path.join(process.cwd(), "public", "index.html");
    fs.createReadStream(filePath)
      .on("error", () => { res.writeHead(404); res.end("Missing file"); })
      .pipe(res);
    return;
  }
  res.writeHead(404);
  res.end("Not Found");
}).listen(3000, () => console.log("Put public/index.html then open http://localhost:3000"));
