/**
 * Snippet 085: File checksum (SHA-256)
 * File: 84-file-checksum.js
 *
 * How to use:
 *   node snippets/84-file-checksum.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import fs from "node:fs";
import { createHash } from "node:crypto";

function sha256File(file) {
  return new Promise((resolve, reject) => {
    const h = createHash("sha256");
    fs.createReadStream(file)
      .on("data", d => h.update(d))
      .on("error", reject)
      .on("end", () => resolve(h.digest("hex")));
  });
}

console.log(await sha256File("README.md"));
