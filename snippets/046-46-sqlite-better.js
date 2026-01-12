/**
 * Snippet 046: SQLite quick DB (better-sqlite3)
 * File: 46-sqlite-better.js
 *
 * How to use:
 *   node snippets/46-sqlite-better.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import Database from "better-sqlite3";

const db = new Database("app.db");
db.exec("CREATE TABLE IF NOT EXISTS notes(id INTEGER PRIMARY KEY, text TEXT)");
db.prepare("INSERT INTO notes(text) VALUES (?)").run("hello");
console.log(db.prepare("SELECT * FROM notes").all());
