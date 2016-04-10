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
  if (!array) {
    return '';
  }

  let s = array[0];

  if (s === undefined || s === null) {
    s = '';
  }

  for (let i = 1, n = array.length; i < n; i++) {
    let e = array[i];

    if (e === undefined || e === null) {
      e = '';
    }

    s += separator + e;
  }

  return s;
}
