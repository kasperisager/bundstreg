/**
 * Join a number of arrays to a single array.
 *
 * @example
 * concat([1, 2], [3, 4], [5, 6]);
 * // => [1, 2, 3, 4, 5, 6]
 *
 * @param {Array} array The first array to concatenate.
 * @param {...Array} rest The rest of the arrays to concatenate.
 * @return {Array} The concatenated array.
 */
export default function concat(array, ...rest) {
  if (!array) {
    return [];
  }

  if (!rest) {
    return array;
  }

  return array.concat(...rest);
}
