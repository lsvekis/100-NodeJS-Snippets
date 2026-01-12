/**
 * Snippet 079: Exec a shell command (careful!)
 * File: 78-exec.js
 *
 * How to use:
 *   node snippets/78-exec.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { exec } from "node:child_process";

exec("node -v", (err, stdout, stderr) => {
  if (err) return console.error(err);
  console.log(stdout.trim());
});
