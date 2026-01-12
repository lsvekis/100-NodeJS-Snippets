/**
 * Snippet 004: Parse query string parameters
 * File: 04-query-params.js
 *
 * How to use:
 *   node snippets/04-query-params.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import http from "node:http";
import { URL } from "node:url";

http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");
  const name = url.searchParams.get("name") ?? "friend";
  res.end(`Hi ${name}`);
}).listen(3000, () => console.log("Try http://localhost:3000/?name=Lars"));
