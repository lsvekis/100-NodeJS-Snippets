/**
 * Snippet 016: Read a JSON file safely
 * File: 16-read-json-file.js
 *
 * How to use:
 *   node snippets/16-read-json-file.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { readFile } from "node:fs/promises";

async function readJsonFile(file) {
  const raw = await readFile(file, "utf8");
  return JSON.parse(raw);
}

console.log(await readJsonFile("package.json"));
