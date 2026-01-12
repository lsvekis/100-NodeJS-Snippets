/**
 * Snippet 099: Simple HTML escaping
 * File: 98-escape-html.js
 *
 * How to use:
 *   node snippets/98-escape-html.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function escapeHtml(s="") {
  return s.replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[c]));
}

console.log(escapeHtml('<script>alert("x")</script>'));
