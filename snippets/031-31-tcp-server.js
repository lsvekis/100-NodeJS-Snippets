/**
 * Snippet 031: Basic TCP server
 * File: 31-tcp-server.js
 *
 * How to use:
 *   node snippets/31-tcp-server.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import net from "node:net";

net.createServer((socket) => {
  socket.write("Welcome!\n");
  socket.on("data", d => socket.write(`Echo: ${d}`));
}).listen(4000, () => console.log("TCP server on port 4000"));
