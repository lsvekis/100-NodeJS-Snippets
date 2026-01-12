/**
 * Snippet 007: Environment variables + defaults
 * File: 07-env-defaults.js
 *
 * How to use:
 *   node snippets/07-env-defaults.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const PORT = Number(process.env.PORT ?? 3000);
const NODE_ENV = process.env.NODE_ENV ?? "development";
console.log({ PORT, NODE_ENV });
