/**
 * Snippet 073: Safe JSON stringify (circular refs)
 * File: 72-safe-stringify.js
 *
 * How to use:
 *   node snippets/72-safe-stringify.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function safeStringify(obj) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (k, v) => {
    if (typeof v === "object" && v) {
      if (seen.has(v)) return "[Circular]";
      seen.add(v);
    }
    return v;
  });
}
const a = {}; a.self = a;
console.log(safeStringify(a));
