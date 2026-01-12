/**
 * Snippet 059: File upload server (multer)
 * File: 59-express-upload-multer.js
 *
 * How to use:
 *   node snippets/59-express-upload-multer.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import express from "express";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const app = express();

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({ savedAs: req.file.filename, original: req.file.originalname });
});

app.listen(3000, () => console.log("POST multipart to http://localhost:3000/upload field name 'file'"));
