/**
 * Snippet 090: Typed-ish config object
 * File: 89-config-object.js
 *
 * How to use:
 *   node snippets/89-config-object.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const config = {
  port: Number(process.env.PORT ?? 3000),
  debug: process.env.DEBUG === "true",
};
console.log(config);
