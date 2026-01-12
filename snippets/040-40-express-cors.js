/**
 * Snippet 040: CORS in Express (cors)
 * File: 40-express-cors.js
 *
 * How to use:
 *   node snippets/40-express-cors.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "https://your-site.com" }));
app.get("/", (_, res) => res.json({ ok: true }));
app.listen(3000, () => console.log("http://localhost:3000"));
