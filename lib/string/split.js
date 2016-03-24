/**
 * Split a string into an array of substrings.
 *
 * __Note:__ If no separator is provided then the returned array will contain a single substring consisting of the
 * entire original string. If the separator is the empty string then the string will be split on every character.
 *
 * @example
 * const s = 'Hello World';
 * split(s, ' ');
 * // => ['Hello', 'World']
 *
 * @param {string} string The string to split.
 * @param {string|RegExp} [separator] The separator to use for splitting the string.
 * @param {number} [limit] The number of splits to be made.
 * @return {Array<string>} The array of substrings.
 */
export default function split(string, separator, limit) {
  return string ? string.split(separator, limit) : '';
}
