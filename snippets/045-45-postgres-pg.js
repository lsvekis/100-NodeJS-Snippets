/**
 * Snippet 045: Postgres query (pg)
 * File: 45-postgres-pg.js
 *
 * How to use:
 *   node snippets/45-postgres-pg.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import pg from "pg";
const { Pool } = pg;

const cs = process.env.DATABASE_URL;
if (!cs) {
  console.error("Set DATABASE_URL in .env to run this snippet.");
  process.exit(1);
}

const pool = new Pool({ connectionString: cs });
const { rows } = await pool.query("SELECT now() AS time");
console.log(rows[0]);
await pool.end();
