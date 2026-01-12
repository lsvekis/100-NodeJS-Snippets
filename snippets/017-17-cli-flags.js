/**
 * Snippet 017: Simple CLI flags parser
 * File: 17-cli-flags.js
 *
 * How to use:
 *   node snippets/17-cli-flags.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const args = process.argv.slice(2);
const flags = Object.fromEntries(args.map(a => {
  const [k, v="true"] = a.replace(/^--/, "").split("=");
  return [k, v];
}));
console.log(flags);
