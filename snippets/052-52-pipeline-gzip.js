/**
 * Snippet 052: Pipeline streams with error handling
 * File: 52-pipeline-gzip.js
 *
 * How to use:
 *   node snippets/52-pipeline-gzip.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { pipeline } from "node:stream/promises";
import fs from "node:fs";
import zlib from "node:zlib";

await pipeline(
  fs.createReadStream("README.md"),
  zlib.createGzip(),
  fs.createWriteStream("README.md.gz")
);
console.log("Wrote README.md.gz");
