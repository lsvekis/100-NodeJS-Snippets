/**
 * Snippet 024: Basic interval job
 * File: 24-interval-job.js
 *
 * How to use:
 *   node snippets/24-interval-job.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

setInterval(() => {
  console.log("Running job:", new Date().toISOString());
}, 60_000);
