/**
 * Snippet 092: Strip control characters
 * File: 91-strip-control.js
 *
 * How to use:
 *   node snippets/91-strip-control.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function stripControlChars(s) {
  return String(s).replace(/[\x00-\x1F\x7F]/g, "");
}
console.log(stripControlChars("hi\nthere\t!"));
