/**
 * Check if a predicate returns truthy for all elements of an array.
 *
 * @example
 * const a = [2, 4, 6];
 * every(a, (e, i) => e % 2 === 0);
 * // => true
 *
 * @param {Array} array The array to check.
 * @param {Function} predicate The predicate to invoke on each element.
 * @return {boolean} `true` if the predicate returns truthy for all elements of the array, otherwise `false`.
 */
export function every(array, predicate) {
  if (!array || !predicate) {
    return true;
  }

  for (let i = 0, n = array.length; i < n; i++) {
    if (!predicate(array[i], i)) {
      return false;
    }
  }

  return true;
}
