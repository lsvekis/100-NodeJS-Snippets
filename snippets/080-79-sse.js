/**
 * Snippet 080: Server-Sent Events (SSE)
 * File: 79-sse.js
 *
 * How to use:
 *   node snippets/79-sse.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import http from "node:http";

http.createServer((req, res) => {
  if (req.url === "/events") {
    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });
    const t = setInterval(() => {
      res.write(`data: ${JSON.stringify({ time: Date.now() })}\n\n`);
    }, 1000);
    req.on("close", () => clearInterval(t));
    return;
  }
  res.end("ok");
}).listen(3000, () => console.log("Open /events in browser: http://localhost:3000/events"));
