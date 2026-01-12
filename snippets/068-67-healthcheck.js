/**
 * Snippet 068: Healthcheck endpoint
 * File: 67-healthcheck.js
 *
 * How to use:
 *   node snippets/67-healthcheck.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";

const app = express();
app.get("/health", (req, res) => res.json({ ok: true, uptime: process.uptime() }));
app.listen(3000, () => console.log("http://localhost:3000/health"));
