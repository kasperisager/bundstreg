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
  if (!string) {
    return '';
  }

  let l = 0;
  let r = string.length;

  while (l < r && isWhitespace(string.charCodeAt(l))) {
    l++;
  }

  while (r > l && isWhitespace(string.charCodeAt(r - 1))) {
    r--;
  }

  return string.substring(l, r);
}

/**
 * Check if a character code is whitespace or a line terminator.
 *
 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.2
 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.3
 *
 * @param {number} c The character code to check.
 * @return {boolean} `true` if the character code is whitespace, otherwise `false`.
 * @private
 */
function isWhitespace(c) {
  return c === 0x0020 ||
    c === 0x0009 ||
    c === 0x000a ||
    c === 0x000b ||
    c === 0x000c ||
    c === 0x00a0 ||
    c === 0xfeff ||
    c === 0x000d ||
    c === 0x2028 ||
    c === 0x2029;
}
