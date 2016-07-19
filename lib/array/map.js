/**
 * Create an array of values returned from invocations of an iteratee on each element of an array.
 *
 * @example
 * const a = [1, 2, 3];
 * map(a, (e, i) => e * 2);
 * // => [2, 4, 6]
 *
 * @param {Array} array The array to map over.
 * @param {Function} iteratee The iteratee to invoke on each element.
 * @return {Array} The array of values returned from each invocation of the iteratee.
 */
export function map(array, iteratee) {
  if (!array) {
    return [];
  }

  if (!iteratee) {
    return array;
  }

  const n = array.length;
  const r = new Array(n);

  for (let i = 0; i < n; i++) {
    r[i] = iteratee(array[i], i);
  }

  return r;
}
