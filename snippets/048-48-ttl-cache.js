/**
 * Snippet 048: TTL cache (expires entries)
 * File: 48-ttl-cache.js
 *
 * How to use:
 *   node snippets/48-ttl-cache.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const cache = new Map();

function setTTL(key, value, ms) {
  cache.set(key, value);
  setTimeout(() => cache.delete(key), ms).unref?.();
}

setTTL("token", "abc", 500);
console.log(cache.get("token"));
setTimeout(() => console.log("after:", cache.get("token")), 800);
