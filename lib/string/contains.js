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
 * @param {number} [position=0] The position at which to start looking.
 * @return {boolean} `true` if the string contains the substring, otherwise `false`.
 */
export default function contains(string, query, position = 0) {
  const {min, max} = Math;

  const sl = string.length;
  const ql = query.length;
  const s = min(max(0, position), sl);

  if (ql + s > sl) {
    return false;
  }

  return string.indexOf(query, s) !== -1;
}
