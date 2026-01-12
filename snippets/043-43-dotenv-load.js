/**
 * Snippet 043: Load .env config (dotenv)
 * File: 43-dotenv-load.js
 *
 * How to use:
 *   node snippets/43-dotenv-load.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import "dotenv/config";

console.log("DB_URL:", process.env.DB_URL);
