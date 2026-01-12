/**
 * Snippet 055: Hash content with SHA-256
 * File: 55-sha256.js
 *
 * How to use:
 *   node snippets/55-sha256.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { createHash } from "node:crypto";

const hash = createHash("sha256").update("hello").digest("hex");
console.log(hash);
