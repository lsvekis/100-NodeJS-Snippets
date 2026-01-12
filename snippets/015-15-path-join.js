/**
 * Snippet 015: Join paths safely
 * File: 15-path-join.js
 *
 * How to use:
 *   node snippets/15-path-join.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import path from "node:path";

const fullPath = path.join(process.cwd(), "data", "users.json");
console.log(fullPath);
