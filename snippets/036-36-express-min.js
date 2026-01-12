/**
 * Snippet 036: Simple Express server
 * File: 36-express-min.js
 *
 * How to use:
 *   node snippets/36-express-min.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";

const app = express();
app.get("/health", (_, res) => res.json({ ok: true }));
app.listen(3000, () => console.log("http://localhost:3000/health"));
