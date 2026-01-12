/**
 * Snippet 075: Simple in-memory job queue
 * File: 74-in-memory-queue.js
 *
 * How to use:
 *   node snippets/74-in-memory-queue.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

const queue = [];
let running = false;

async function runQueue() {
  if (running) return;
  running = true;
  while (queue.length) await queue.shift()();
  running = false;
}

function enqueue(job) {
  queue.push(job);
  runQueue();
}

enqueue(async () => console.log("job1"));
enqueue(async () => console.log("job2"));
