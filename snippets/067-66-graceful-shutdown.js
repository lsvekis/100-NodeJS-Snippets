/**
 * Snippet 067: Graceful shutdown pattern (Express)
 * File: 66-graceful-shutdown.js
 *
 * How to use:
 *   node snippets/66-graceful-shutdown.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";

const app = express();
app.get("/", (_, res) => res.send("ok"));

const server = app.listen(3000, () => console.log("http://localhost:3000"));

process.on("SIGTERM", () => {
  console.log("Shutting down...");
  server.close(() => process.exit(0));
});
