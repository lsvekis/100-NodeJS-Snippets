/**
 * Snippet 018: Prompt the user in terminal
 * File: 18-readline-prompt.js
 *
 * How to use:
 *   node snippets/18-readline-prompt.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import readline from "node:readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const answer = await new Promise(resolve => rl.question("Your name? ", resolve));
rl.close();
console.log(`Hello ${answer}`);
