/**
 * Snippet 054: Generate UUIDs (crypto.randomUUID)
 * File: 54-uuid.js
 *
 * How to use:
 *   node snippets/54-uuid.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { randomUUID } from "node:crypto";
console.log(randomUUID());
