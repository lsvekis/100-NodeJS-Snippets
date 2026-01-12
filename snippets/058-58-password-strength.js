/**
 * Snippet 058: Validate password strength (basic)
 * File: 58-password-strength.js
 *
 * How to use:
 *   node snippets/58-password-strength.js
 *
 * Notes:
 *   - Some snippets require dependencies: run `npm install`
 *   - Some require environment variables (see file)
 */

function isStrong(pw) {
  return pw.length >= 12 && /[A-Z]/.test(pw) && /[a-z]/.test(pw) && /\d/.test(pw);
}
console.log(isStrong("weak"));
console.log(isStrong("StrongerPass123"));
