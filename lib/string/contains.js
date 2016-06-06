/**
 * Check if a string contains a specific substring.
 *
 * @example
 * const s = 'Hello World';
 * contains(s, 'orl');
 * // => true
 *
 * @param {string} string The string to check.
 * @param {string} query The substring to check for.
 * @param {number} [position] The position at which to start looking.
 * @return {boolean} `true` if the string contains the substring, otherwise `false`.
 */
export function contains(string, query, position) {
  if (!string || !query) {
    return false;
  }

  const s = string;
  const q = query;
  const p = position;

  return (p === undefined ? s.indexOf(q) : s.indexOf(q, p)) !== -1;
}
