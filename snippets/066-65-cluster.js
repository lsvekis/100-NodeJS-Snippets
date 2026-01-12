/**
 * Snippet 066: Cluster mode multi-process server
 * File: 65-cluster.js
 *
 * How to use:
 *   node snippets/65-cluster.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import cluster from "node:cluster";
import os from "node:os";
import http from "node:http";

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) cluster.fork();
  console.log("Primary started", process.pid);
} else {
  http.createServer((_, res) => res.end("ok")).listen(3000);
  console.log("Worker started", process.pid);
}
