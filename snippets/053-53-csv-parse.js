/**
 * Snippet 053: CSV parsing (csv-parse)
 * File: 53-csv-parse.js
 *
 * How to use:
 *   node snippets/53-csv-parse.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { parse } from "csv-parse/sync";

const records = parse("a,b\n1,2\n3,4\n", { columns: true });
console.log(records);
