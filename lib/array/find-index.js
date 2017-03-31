/**
 * Find the index of the first element of an array for which a predicate returns truthy.
 *
 * @example
 * const a = [1, 2, 3];
 * find(a, (e, i) => e % 2 === 0);
 * // => 1
 *
 * @param {Array} array The array to look for an element in.
 * @param {Function} predicate The predicate to invoke on each element.
 * @return {*} The index of the first element for which the predicate returns truthy, or `-1`.
 */
export function findIndex(array, predicate) {
  if (!array || !predicate) {
    return -1;
  }

  for (let i = 0, n = array.length; i < n; i++) {
    const e = array[i];

    if (predicate(e, i)) {
      return i;
    }
  }

  return -1;
}
