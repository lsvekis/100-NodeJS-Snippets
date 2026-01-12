/**
 * Snippet 026: Retry wrapper with backoff
 * File: 26-retry-backoff.js
 *
 * How to use:
 *   node snippets/26-retry-backoff.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

export async function retry(fn, tries=3, delay=200) {
  let err;
  for (let i = 0; i < tries; i++) {
    try { return await fn(); }
    catch (e) { err = e; await new Promise(r => setTimeout(r, delay * (i+1))); }
  }
  throw err;
}
