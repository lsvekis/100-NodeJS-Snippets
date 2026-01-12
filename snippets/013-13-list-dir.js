/**
 * Snippet 013: List files in a directory
 * File: 13-list-dir.js
 *
 * How to use:
 *   node snippets/13-list-dir.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { readdir } from "node:fs/promises";

const entries = await readdir("./snippets", { withFileTypes: true });
console.log(entries.filter(e => e.isFile()).map(e => e.name));
