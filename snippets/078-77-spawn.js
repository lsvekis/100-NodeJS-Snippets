/**
 * Snippet 078: Spawn a child process
 * File: 77-spawn.js
 *
 * How to use:
 *   node snippets/77-spawn.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { spawn } from "node:child_process";

const p = spawn("node", ["-v"]);
p.stdout.on("data", d => process.stdout.write(d));
p.on("close", code => console.log("exit", code));
