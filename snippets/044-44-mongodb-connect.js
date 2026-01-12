/**
 * Snippet 044: Connect to MongoDB (mongodb)
 * File: 44-mongodb-connect.js
 *
 * How to use:
 *   node snippets/44-mongodb-connect.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { MongoClient } from "mongodb";

const url = process.env.MONGO_URL;
if (!url) {
  console.error("Set MONGO_URL in .env to run this snippet.");
  process.exit(1);
}

const client = new MongoClient(url);
await client.connect();
const db = client.db("app");
const users = db.collection("users");

console.log(await users.findOne({}));
await client.close();
