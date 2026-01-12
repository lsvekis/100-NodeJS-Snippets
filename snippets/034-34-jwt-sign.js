/**
 * Snippet 034: Create a JWT (jsonwebtoken)
 * File: 34-jwt-sign.js
 *
 * How to use:
 *   node snippets/34-jwt-sign.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET ?? "dev_secret_change_me";
const token = jwt.sign({ userId: 123 }, secret, { expiresIn: "1h" });
console.log(token);
