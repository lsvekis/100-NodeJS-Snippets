/**
 * Snippet 039: Serve static files in Express
 * File: 39-express-static.js
 *
 * How to use:
 *   node snippets/39-express-static.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";

const app = express();
app.use(express.static("public"));
app.listen(3000, () => console.log("http://localhost:3000"));
