/**
 * Partition an array into two arrays where the first contains elements for which the predicate returns truthy.
 *
 * @example
 * const a = [1, 2, 3, 4];
 * partition(a, (e, i) => e % 2 === 0);
 * // => [[2, 4], [1, 3]]
 *
 * @param {Array} array The array to partition.
 * @param {Function} predicate The predicate to invoke on each element.
 * @return {Array} An array containing the two paritions.
 */
export function partition(array, predicate) {
  if (!array) {
    return [[], []];
  }

  if (!predicate) {
    return [array, []];
  }

  const l = [];
  const r = [];

  for (let i = 0, n = array.length; i < n; i++) {
    const e = array[i];

    if (predicate(e, i)) {
      l[l.length] = e;
    } else {
      r[r.length] = e;
    }
  }

  return [l, r];
}
