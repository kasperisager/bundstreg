/**
 * Create a shallow copy of a portion of an array.
 *
 * @example
 * const a = [1, 2, 3, 4];
 * slice(a, 1, 3);
 * // => [2, 3]
 *
 * @param {Array} array The array to copy.
 * @param {number} [start=0] The index at which to begin the copy.
 * @param {number} [end=array.length] The index at which to end the copy.
 * @return {Array} The copy of the array.
 */
export default function slice(array, start, end) {
  if (!array) {
    return [];
  }

  const n = array.length;

  let s = start === undefined ? 0 : start;
  let e = end === undefined || end > n ? n : end;

  if (s < 0) {
    s = -s > n ? 0 : n + s;
  }

  if (e < 0) {
    e += n;
  }

  const c = s > e ? 0 : e - s;
  const a = new Array(c);

  for (let i = 0; i < c; i++) {
    a[i] = array[s + i];
  }

  return a;
}
