import each from './each';

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
export default function filter(array, predicate) {
  if (!array) {
    return [];
  }

  if (!predicate) {
    return array;
  }

  let r = [];

  each(array, (e, i) => {
    if (predicate(e, i)) {
      r[r.length] = e;
    }
  });

  return r;
}
