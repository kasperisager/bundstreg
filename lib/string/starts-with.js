/**
 * Check if a string starts with a specific substring.
 *
 * @example
 * const s = 'Hello World';
 * startsWith(s, 'Hel');
 * // => true
 *
 * @param {string} string The string to check.
 * @param {string} query The substring to check for.
 * @param {number} [position=0] The position at which to start looking.
 * @return {boolean} `true` if the string starts with the substring, otherwise `false`.
 */
export function startsWith(string, query, position = 0) {
  if (!string || !query) {
    return false;
  }

  const sl = string.length;
  const ql = query.length;
  const s = Math.min(Math.max(0, position), sl);

  if (ql + s > sl) {
    return false;
  }

  for (let i = 0; i < ql; i++) {
    if (string[s + i] !== query[i]) {
      return false;
    }
  }

  return true;
}
