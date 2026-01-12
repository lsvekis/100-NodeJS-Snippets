/**
 * Snippet 095: Parse NDJSON line-by-line
 * File: 94-read-ndjson.js
 *
 * How to use:
 *   node snippets/94-read-ndjson.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import fs from "node:fs";
import readline from "node:readline";

const file = "data.ndjson";
fs.writeFileSync(file, '{"a":1}\n{"a":2}\n', "utf8");

const rl = readline.createInterface({ input: fs.createReadStream(file) });
for await (const line of rl) {
  const obj = JSON.parse(line);
  console.log(obj);
}
