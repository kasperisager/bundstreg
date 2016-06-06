/**
 * Fill a portion of an array with a value.
 *
 * @example
 * const a = [1, 2, 3, 4];
 * fill(a, 'foo', 1, 3);
 * // => [1, 'foo', 'foo', 4]
 *
 * @param {Array} array The array to fill.
 * @param {*} value The value to fill the array with.
 * @param {number} [start=0] The index at which to start filling in values.
 * @param {number} [end=array.length] The index at which to end filling in values.
 * @return {Array} The array with the value filled in.
 */
export function fill(array, value, start, end) {
  if (!array) {
    return [];
  }

  const n = array.length;
  const a = new Array(n);

  let s = start === undefined ? 0 : start;
  let e = end === undefined || end > n ? n : end;

  if (s < 0) {
    s = -s > n ? 0 : n + s;
  }

  if (e < 0) {
    e += n;
  }

  e = s > e ? 0 : e;

  let i = 0;
  let j = e;

  while (i < s) {
    a[i] = array[i++];
  }

  while (s < e) {
    a[s++] = value;
  }

  while (j < n) {
    a[j] = array[j++];
  }

  return a;
}
