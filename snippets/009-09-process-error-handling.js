/**
 * Snippet 009: Handle unhandled promise rejections + uncaught exceptions
 * File: 09-process-error-handling.js
 *
 * How to use:
 *   node snippets/09-process-error-handling.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

process.on("unhandledRejection", (err) => {
  console.error("Unhandled rejection:", err);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  process.exit(1);
});
