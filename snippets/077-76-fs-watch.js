/**
 * Snippet 077: Basic file watcher
 * File: 76-fs-watch.js
 *
 * How to use:
 *   node snippets/76-fs-watch.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import fs from "node:fs";

fs.watch("./snippets", { recursive: true }, (eventType, filename) => {
  console.log(eventType, filename);
});
console.log("Watching ./snippets ... (Ctrl+C to stop)");
