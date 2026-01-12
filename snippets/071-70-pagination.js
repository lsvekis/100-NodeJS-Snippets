/**
 * Snippet 071: Pagination helper
 * File: 70-pagination.js
 *
 * How to use:
 *   node snippets/70-pagination.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function paginate(page=1, limit=20) {
  const p = Math.max(1, Number(page));
  const l = Math.min(100, Math.max(1, Number(limit)));
  return { skip: (p-1)*l, take: l };
}
console.log(paginate(2, 10));
