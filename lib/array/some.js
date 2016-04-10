/**
 * Check if a predicate returns truthy for any element of an array.
 *
 * > __Note:__ Iteration stops as soon as an element is found for which the predicate returns truthy.
 *
 * @example
 * const a = [1, 2, 3];
 * some(a, (e, i) => e % 2 === 0);
 * // => true
 *
 * @param {Array} array The array to check.
 * @param {Function} predicate The predicate to invoke on each element.
 * @return {boolean} `true` if the predicate returns truthy for any element of the array, otherwise `false`.
 */
export default function some(array, predicate) {
  if (!array) {
    return false;
  }

  const n = array.length;

  if (n === 0) {
    return false;
  }

  if (!predicate) {
    return true;
  }

  for (let i = 0; i < n; i++) {
    if (predicate(array[i], i)) {
      return true;
    }
  }

  return false;
}
