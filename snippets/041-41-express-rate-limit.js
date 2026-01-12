/**
 * Snippet 041: Rate limiting (express-rate-limit)
 * File: 41-express-rate-limit.js
 *
 * How to use:
 *   node snippets/41-express-rate-limit.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";
import rateLimit from "express-rate-limit";

const app = express();
app.use(rateLimit({ windowMs: 60_000, max: 100 }));
app.get("/", (_, res) => res.json({ ok: true }));
app.listen(3000, () => console.log("http://localhost:3000"));
