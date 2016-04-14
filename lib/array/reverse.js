/**
 * Reverse the elements of an array.
 *
 * > __Note:__ Unlike the native `Array#reverse()` reversing will happen on a copy of the array which therefore won't be
 * > modified
 *
 * @example
 * const a = [1, 2, 3, 4, 5];
 * reverse(a);
 * // => [5, 4, 3, 2, 1]
 *
 * @param {Array} array The array to reverse.
 * @return {Array} The reversed array.
 */
export default function reverse(array) {
  if (!array) {
    return [];
  }

  const n = array.length;
  const a = new Array(n);

  for (let l = 0, m = Math.ceil(n / 2); l < m; l++) {
    const r = n - l - 1;
    a[l] = array[r];
    a[r] = array[l];
  }

  return a;
}
