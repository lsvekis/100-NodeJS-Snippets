/**
 * Snippet 084: Base64 encode/decode
 * File: 83-base64.js
 *
 * How to use:
 *   node snippets/83-base64.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const b64 = Buffer.from("hello", "utf8").toString("base64");
const txt = Buffer.from(b64, "base64").toString("utf8");
console.log({ b64, txt });
