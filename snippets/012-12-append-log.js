/**
 * Snippet 012: Append to a log file
 * File: 12-append-log.js
 *
 * How to use:
 *   node snippets/12-append-log.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { appendFile } from "node:fs/promises";

await appendFile("app.log", `[${new Date().toISOString()}] started\n`, "utf8");
console.log("Appended to app.log");
