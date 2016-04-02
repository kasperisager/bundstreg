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
  if (!string || !query) {
    return false;
  }

  return string.indexOf(query, position) !== -1;
}
