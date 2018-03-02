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
export function trim(string) {
  if (!string) {
    return '';
  }

  return string.trim();
}
