/**
 * Snippet 003: Read JSON body from a request
 * File: 03-read-json-body.js
 *
 * How to use:
 *   node snippets/03-read-json-body.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import http from "node:http";

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", chunk => data += chunk);
    req.on("end", () => {
      try { resolve(JSON.parse(data || "{}")); }
      catch (e) { reject(e); }
    });
  });
}

http.createServer(async (req, res) => {
  if (req.method === "POST" && req.url === "/echo") {
    try {
      const body = await readJson(req);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(body));
    } catch {
      res.writeHead(400);
      return res.end("Invalid JSON");
    }
  }
  res.writeHead(404);
  res.end("Not Found");
}).listen(3000, () => console.log("POST http://localhost:3000/echo"));
