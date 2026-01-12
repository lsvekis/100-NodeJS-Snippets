/**
 * Snippet 065: Worker threads (worker)
 * File: 64-worker-task.js
 *
 * How to use:
 *   node snippets/64-worker-task.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { parentPort } from "node:worker_threads";

function fib(n){ return n<=1 ? n : fib(n-1)+fib(n-2); }

parentPort.on("message", ({ n }) => {
  parentPort.postMessage(fib(n));
});
