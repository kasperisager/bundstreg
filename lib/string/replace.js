/**
 * @param {string} string
 * @param {string|RegExp} pattern
 * @param {string|Function} replacement
 * @return {string}
 */
export default function replace(string, pattern, replacement) {
  return string ? string.replace(pattern, replacement) : '';
}
