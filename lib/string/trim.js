/**
 * Trim trailing whitespace from a string.
 *
 * @example
 * const s = '  Hello World \t';
 * trim(s);
 * // => 'Hello World'
 *
 * @param {string} string The string to trim.
 * @return {string} The trimmed string.
 */
export default function trim(string) {
  return string ? string.trim() : '';
}
