/**
 * Snippet 089: Require env var helper
 * File: 88-require-env.js
 *
 * How to use:
 *   node snippets/88-require-env.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function requireEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

try {
  console.log(requireEnv("SOME_REQUIRED_VAR"));
} catch (e) {
  console.error(String(e.message));
}
