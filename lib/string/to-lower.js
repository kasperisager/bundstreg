/**
 * Lowercase a string.
 *
 * @example
 * const s = 'Hello World';
 * toLower(s);
 * // => 'hello world'
 *
 * @param {string} string The string to lowercase.
 * @return {string} The lowercased string.
 */
export default function toLower(string) {
  return string ? string.toLowerCase() : '';
}
