/**
 * Snippet 081: Basic cookie parsing
 * File: 80-parse-cookies.js
 *
 * How to use:
 *   node snippets/80-parse-cookies.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function parseCookies(cookieHeader="") {
  return Object.fromEntries(
    cookieHeader.split(";")
      .map(v => v.trim().split("="))
      .filter(a => a[0])
  );
}

console.log(parseCookies("a=1; session=abc123; theme=dark"));
