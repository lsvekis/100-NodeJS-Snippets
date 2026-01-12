/**
 * Snippet 064: Worker threads (main)
 * File: 64-worker-main.js
 *
 * How to use:
 *   node snippets/64-worker-main.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { Worker } from "node:worker_threads";

const worker = new Worker(new URL("./64-worker-task.js", import.meta.url), { type: "module" });
worker.postMessage({ n: 40 });
worker.on("message", msg => console.log("Result:", msg));
