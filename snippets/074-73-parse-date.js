/**
 * Snippet 074: Parse a date safely
 * File: 73-parse-date.js
 *
 * How to use:
 *   node snippets/73-parse-date.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function parseDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d;
}
console.log(parseDate("2026-01-12"));
console.log(parseDate("not a date"));
