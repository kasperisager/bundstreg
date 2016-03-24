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
export default function map(array, iteratee) {
  let c = 0;
  let r = Array(array.length);

  for (let i = 0, n = array.length; i < n; i++) {
    r[c++] = iteratee(array[i], i);
  }

  return r;
}
