/**
 * Snippet 098: ESM __dirname equivalent
 * File: 97-esm-dirname.js
 *
 * How to use:
 *   node snippets/97-esm-dirname.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { fileURLToPath } from "node:url";
import path from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log({ __filename, __dirname });
