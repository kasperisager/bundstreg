/**
 * @param {string} string
 * @param {string|RegExp} separator
 * @param {number} [limit]
 * @return {Array<string>}
 */
export default function split(string, separator, limit) {
  return string ? string.split(separator, limit) : '';
}
