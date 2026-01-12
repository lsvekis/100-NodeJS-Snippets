/**
 * Snippet 101: One-file API + static server combo
 * File: 100-api-and-static.js
 *
 * How to use:
 *   node snippets/100-api-and-static.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.get("/api/time", (req, res) => res.json({ time: new Date().toISOString() }));
app.listen(3000, () => console.log("http://localhost:3000  |  http://localhost:3000/api/time"));
