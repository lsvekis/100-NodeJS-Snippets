/**
 * Snippet 063: Read CPU info
 * File: 63-cpu-count.js
 *
 * How to use:
 *   node snippets/63-cpu-count.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import os from "node:os";
console.log(os.cpus().length);
