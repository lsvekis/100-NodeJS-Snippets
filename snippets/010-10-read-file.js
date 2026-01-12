/**
 * Snippet 010: Read a text file (async/await)
 * File: 10-read-file.js
 *
 * How to use:
 *   node snippets/10-read-file.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { readFile } from "node:fs/promises";

const text = await readFile("notes.txt", "utf8");
console.log(text);
