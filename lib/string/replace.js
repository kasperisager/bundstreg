/**
 * Replace occurences of a pattern in a string with a replacement.
 *
 * > __Note:__ If a string is used as pattern then only the first occurence of the string will be replaced. To perform a
 * > global replacement use a regular expression with the `g` flag.
 *
 * @example
 * const s = 'Hello World';
 * replace(s, 'Hello', 'Howdy');
 * // => 'Howdy World'
 *
 * @param {string} string The string to perform the replacement in.
 * @param {string|RegExp} pattern The pattern to replace.
 * @param {string|Function} replacement The replacement for the pattern.
 * @return {string} The string with occurences of the pattern replaced by the replacement.
 */
export function replace(string, pattern, replacement) {
  if (!string && string !== '') {
    return '';
  }

  if (!pattern || !replacement && replacement !== '') {
    return string;
  }

  return string.replace(pattern, replacement);
}
