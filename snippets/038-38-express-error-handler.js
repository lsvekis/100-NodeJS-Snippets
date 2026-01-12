/**
 * Snippet 038: Express error handler
 * File: 38-express-error-handler.js
 *
 * How to use:
 *   node snippets/38-express-error-handler.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";

const app = express();
app.get("/", () => { throw new Error("Boom"); });

// Error handler must be last
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal error" });
});

app.listen(3000, () => console.log("http://localhost:3000"));
