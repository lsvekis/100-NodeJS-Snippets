/**
 * Snippet 096: Simple metrics counter (Express)
 * File: 95-simple-metrics.js
 *
 * How to use:
 *   node snippets/95-simple-metrics.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";

const metrics = { requests: 0 };
const app = express();

app.use((req, res, next) => { metrics.requests++; next(); });
app.get("/metrics", (req, res) => res.json(metrics));
app.listen(3000, () => console.log("http://localhost:3000/metrics"));
