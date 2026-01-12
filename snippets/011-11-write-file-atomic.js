/**
 * Snippet 011: Write a file (temp + rename)
 * File: 11-write-file-atomic.js
 *
 * How to use:
 *   node snippets/11-write-file-atomic.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { writeFile, rename } from "node:fs/promises";

const tmp = "data.json.tmp";
await writeFile(tmp, JSON.stringify({ saved: true }, null, 2), "utf8");
await rename(tmp, "data.json");
console.log("Wrote data.json");
