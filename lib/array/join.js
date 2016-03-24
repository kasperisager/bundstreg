/**
 * Join the elements of an array to a string using a separator.
 *
 * @example
 * const a = [1, 2, 3];
 * join(a, ' + ');
 * // => '1 + 2 + 3'
 *
 * @param {Array} array The array whose elements to join.
 * @param {string} [separator=','] The separator to use for joining the elements.
 * @return {string} The resulting string.
 */
export default function join(array, separator = ',') {
  let s = '';

  for (let i = 0, n = array.length; i < n; i++) {
    s += (i === 0 ? '' : separator) + array[i];
  }

  return s;
}
