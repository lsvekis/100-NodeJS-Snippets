/**
 * Snippet 008: Logger wrapper for any request handler
 * File: 08-logger-wrapper.js
 *
 * How to use:
 *   node snippets/08-logger-wrapper.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

export function withLogging(handler) {
  return (req, res) => {
    const start = Date.now();
    res.on("finish", () => {
      console.log(req.method, req.url, res.statusCode, `${Date.now()-start}ms`);
    });
    handler(req, res);
  };
}
