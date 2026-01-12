/**
 * Snippet 097: Adjust EventEmitter max listeners
 * File: 96-max-listeners.js
 *
 * How to use:
 *   node snippets/96-max-listeners.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { EventEmitter } from "node:events";
EventEmitter.defaultMaxListeners = 50;
console.log("defaultMaxListeners:", EventEmitter.defaultMaxListeners);
