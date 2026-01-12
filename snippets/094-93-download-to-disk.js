/**
 * Snippet 094: Download with fetch + stream to disk
 * File: 93-download-to-disk.js
 *
 * How to use:
 *   node snippets/93-download-to-disk.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import fs from "node:fs";
import { pipeline } from "node:stream/promises";

const res = await fetch("https://example.com");
await pipeline(res.body, fs.createWriteStream("download.html"));
console.log("Saved download.html");
