/**
 * Snippet 091: Request ID middleware (Express)
 * File: 90-express-request-id.js
 *
 * How to use:
 *   node snippets/90-express-request-id.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";
import { randomUUID } from "node:crypto";

const app = express();
app.use((req, res, next) => {
  req.id = randomUUID();
  res.setHeader("X-Request-Id", req.id);
  next();
});
app.get("/", (req, res) => res.json({ ok: true, requestId: req.id }));
app.listen(3000, () => console.log("http://localhost:3000"));
