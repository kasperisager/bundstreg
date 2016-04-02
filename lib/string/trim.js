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

  const n = string.length;

  let i;
  let j;

  for (i = 0; i < n; i++) {
    if (!isWhitespace(string.charCodeAt(i))) {
      break;
    }
  }

  for (j = n - 1; j >= i; j--) {
    if (!isWhitespace(string.charCodeAt(j))) {
      break;
    }
  }

  return string.substring(i, j + 1);
}

/**
 * Check if a character code is whitespace or a line terminator.
 *
 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.2
 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.3
 *
 * @param {number} c The character code to check.
 * @return {boolean} `true` if the character code is whitespace, otherwise `false`.
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
