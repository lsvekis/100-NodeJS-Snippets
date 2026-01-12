/**
 * Snippet 076: Limit concurrency for async tasks
 * File: 75-map-limit.js
 *
 * How to use:
 *   node snippets/75-map-limit.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

async function mapLimit(items, limit, fn) {
  const results = [];
  const executing = new Set();
  for (const item of items) {
    const p = Promise.resolve().then(() => fn(item));
    results.push(p);
    executing.add(p);
    p.finally(() => executing.delete(p));
    if (executing.size >= limit) await Promise.race(executing);
  }
  return Promise.all(results);
}

const out = await mapLimit([1,2,3,4,5], 2, async (n) => {
  await new Promise(r => setTimeout(r, 100));
  return n * 2;
});
console.log(out);
