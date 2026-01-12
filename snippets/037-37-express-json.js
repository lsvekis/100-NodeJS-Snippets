/**
 * Snippet 037: Express JSON body parsing
 * File: 37-express-json.js
 *
 * How to use:
 *   node snippets/37-express-json.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";

const app = express();
app.use(express.json());

app.post("/echo", (req, res) => res.json(req.body));
app.listen(3000, () => console.log("POST http://localhost:3000/echo"));
