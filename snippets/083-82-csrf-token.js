/**
 * Snippet 083: CSRF token generation (concept)
 * File: 82-csrf-token.js
 *
 * How to use:
 *   node snippets/82-csrf-token.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { randomBytes } from "node:crypto";
const csrf = randomBytes(16).toString("hex");
console.log(csrf);
