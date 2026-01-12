/**
 * Snippet 033: Hash a password (bcrypt)
 * File: 33-bcrypt-hash.js
 *
 * How to use:
 *   node snippets/33-bcrypt-hash.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import bcrypt from "bcrypt";

const hash = await bcrypt.hash("secret", 12);
const ok = await bcrypt.compare("secret", hash);
console.log({ hash, ok });
