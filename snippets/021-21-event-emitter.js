/**
 * Snippet 021: Create an EventEmitter
 * File: 21-event-emitter.js
 *
 * How to use:
 *   node snippets/21-event-emitter.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { EventEmitter } from "node:events";

const bus = new EventEmitter();
bus.on("saved", id => console.log("Saved:", id));
bus.emit("saved", 123);
