/**
 * Uppercase a string.
 *
 * @example
 * const s = 'Hello World';
 * toUpper(s);
 * // => 'HELLO WORLD'
 *
 * @param {string} string The string to uppercase.
 * @return {string} The uppercased string.
 */
export function toUpper(string) {
  return string ? string.toUpperCase() : '';
}
