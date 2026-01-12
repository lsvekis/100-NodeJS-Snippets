/**
 * Snippet 069: Structured logging (JSON)
 * File: 68-json-logger.js
 *
 * How to use:
 *   node snippets/68-json-logger.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function log(level, msg, extra={}) {
  console.log(JSON.stringify({ level, msg, ...extra, ts: new Date().toISOString() }));
}
log("info", "server_started", { port: 3000 });
