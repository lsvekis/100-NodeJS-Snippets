/**
 * Snippet 086: Validate JSON schema (Ajv)
 * File: 85-ajv-validate.js
 *
 * How to use:
 *   node snippets/85-ajv-validate.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import Ajv from "ajv";
const ajv = new Ajv();

const validate = ajv.compile({
  type: "object",
  properties: { id: { type: "number" } },
  required: ["id"],
  additionalProperties: false
});

console.log(validate({ id: 1 }), validate.errors);
console.log(validate({ id: "x" }), validate.errors);
