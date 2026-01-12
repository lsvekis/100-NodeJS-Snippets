/**
 * Snippet 057: Generate a secure random token
 * File: 57-random-token.js
 *
 * How to use:
 *   node snippets/57-random-token.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { randomBytes } from "node:crypto";
console.log(randomBytes(32).toString("hex"));
