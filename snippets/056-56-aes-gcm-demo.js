/**
 * Snippet 056: Encrypt/decrypt demo (AES-GCM)
 * File: 56-aes-gcm-demo.js
 *
 * How to use:
 *   node snippets/56-aes-gcm-demo.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { randomBytes, createCipheriv, createDecipheriv } from "node:crypto";

const key = randomBytes(32);
const iv = randomBytes(12);

function encrypt(text) {
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const enc = Buffer.concat([cipher.update(text, "utf8"), cipher.final()]);
  return { enc, tag: cipher.getAuthTag() };
}
function decrypt(enc, tag) {
  const decipher = createDecipheriv("aes-256-gcm", key, iv);
  decipher.setAuthTag(tag);
  return Buffer.concat([decipher.update(enc), decipher.final()]).toString("utf8");
}

const { enc, tag } = encrypt("secret message");
console.log("decrypted:", decrypt(enc, tag));
