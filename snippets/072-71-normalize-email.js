/**
 * Snippet 072: Normalize an email
 * File: 71-normalize-email.js
 *
 * How to use:
 *   node snippets/71-normalize-email.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function normalizeEmail(email) {
  return String(email).trim().toLowerCase();
}
console.log(normalizeEmail("  Test@Example.com "));
