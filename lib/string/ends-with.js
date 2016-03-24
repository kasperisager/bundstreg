/**
 * Check if a string ends with a specific substring.
 *
 * @param {string} string The string to check.
 * @param {string} query The substring to check for.
 * @param {number} [position=string.length] The position at which to stop looking.
 * @return {boolean} `true` if the string ends with the substring, otherwise `false`.
 */
export default function endsWith(string, query, position = string.length) {
  const {min, max} = Math;

  const sl = string.length;
  const ql = query.length;
  const s = min(max(0, position), sl) - ql;

  if (s < 0) {
    return false;
  }

  for (let i = 0; i < ql; i++) {
    if (string.charCodeAt(s + i) !== query.charCodeAt(i)) {
      return false;
    }
  }

  return true;
}
