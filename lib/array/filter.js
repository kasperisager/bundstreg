/**
 * Filter an array by only keeping elements for which a predicate returns truthy.
 *
 * @example
 * const a = [1, 2, 3, 4];
 * filter(a, (e, i) => e % 2 === 0);
 * // => [2, 4]
 *
 * @param {Array} array The array to filter.
 * @param {Function} predicate The predicate to invoke on each element.
 * @return {Array} The filtered array.
 */
export function filter(array, predicate) {
  if (!array) {
    return [];
  }

  if (!predicate) {
    return array;
  }

  const n = array.length;
  const f = new Array(n);

  let t = 0;

  for (let i = 0; i < n; i++) {
    const e = array[i];

    if (predicate(e, i)) {
      f[t++] = e;
    }
  }

  const r = new Array(t);

  for (let i = 0; i < t; i++) {
    r[i] = f[i];
  }

  return r;
}
