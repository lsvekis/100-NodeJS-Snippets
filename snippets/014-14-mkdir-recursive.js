/**
 * Snippet 014: Ensure a directory exists
 * File: 14-mkdir-recursive.js
 *
 * How to use:
 *   node snippets/14-mkdir-recursive.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { mkdir } from "node:fs/promises";

await mkdir("./output", { recursive: true });
console.log("Ensured ./output");
