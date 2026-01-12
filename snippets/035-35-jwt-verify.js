/**
 * Snippet 035: Verify a JWT (jsonwebtoken)
 * File: 35-jwt-verify.js
 *
 * How to use:
 *   node snippets/35-jwt-verify.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET ?? "dev_secret_change_me";
const token = jwt.sign({ userId: 123 }, secret, { expiresIn: "1h" });
const payload = jwt.verify(token, secret);
console.log(payload);
