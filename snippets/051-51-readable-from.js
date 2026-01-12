/**
 * Snippet 051: Readable stream from text
 * File: 51-readable-from.js
 *
 * How to use:
 *   node snippets/51-readable-from.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { Readable } from "node:stream";

Readable.from(["one\n", "two\n", "three\n"]).pipe(process.stdout);
