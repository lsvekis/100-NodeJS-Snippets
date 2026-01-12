/**
 * Snippet 042: Validate input with Zod
 * File: 42-zod-validate.js
 *
 * How to use:
 *   node snippets/42-zod-validate.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

import { z } from "zod";

const schema = z.object({ email: z.string().email() });
console.log(schema.parse({ email: "test@example.com" }));
