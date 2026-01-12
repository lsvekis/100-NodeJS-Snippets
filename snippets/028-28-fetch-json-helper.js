/**
 * Snippet 028: JSON fetch helper
 * File: 28-fetch-json-helper.js
 *
 * How to use:
 *   node snippets/28-fetch-json-helper.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

export async function fetchJson(url, opts) {
  const res = await fetch(url, opts);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
