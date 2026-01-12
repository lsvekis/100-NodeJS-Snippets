/**
 * Snippet 032: WebSocket server (ws)
 * File: 32-websocket-server-ws.js
 *
 * How to use:
 *   node snippets/32-websocket-server-ws.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", (ws) => {
  ws.send("hello");
  ws.on("message", (msg) => ws.send(`echo: ${msg}`));
});
console.log("WS server on ws://localhost:8080");
