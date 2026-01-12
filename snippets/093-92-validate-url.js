/**
 * Snippet 093: Validate a URL string
 * File: 92-validate-url.js
 *
 * How to use:
 *   node snippets/92-validate-url.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function isValidUrl(value) {
  try { new URL(value); return true; } catch { return false; }
}
console.log(isValidUrl("https://example.com"));
console.log(isValidUrl("not a url"));
