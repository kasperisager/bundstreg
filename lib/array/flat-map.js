/**
 * Create an array of flattened values returned from invocations of an iteratee on each element of an array.
 *
 * @example
 * const a = [1, 2, 3];
 * flatMap(a, (e, i) => [e, e]);
 * // => [1, 1, 2, 2, 3, 3]
 *
 * @param {Array} array The array to map over.
 * @param {Function} iteratee The iteratee to invoke on each element.
 * @return {Array} The array of flattened values returned from each invocation of the iteratee.
 */
export function flatMap(array, iteratee) {
  if (!array) {
    return [];
  }

  if (!iteratee) {
    return array;
  }

  const n = array.length;
  const a = new Array(n);

  let t = 0;
  let u = 0;

  for (let i = 0; i < n; i++) {
    a[i] = iteratee(array[i], i) || [];
    t += a[i].length;
  }

  const r = new Array(t);

  for (let i = 0; i < n; i++) {
    const b = a[i];

    for (let j = 0, m = b.length; j < m; j++) {
      r[u++] = b[j];
    }
  }

  return r;
}
