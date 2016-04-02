import {sort as timsort} from 'timsort';

/**
 * Sort the elements of an array.
 *
 * > __Note:__ Unlike the native `Array#sort()` sorting will happen on a copy of the array which therefore won't be
 * > modified.
 *
 * @example
 * const a = [3, 1, 2, 7, 6, 4, 5, 10, 8, 9];
 * sort(a);
 * // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * @param {Array} array The array to sort.
 * @param {Function} [comparator] The comparator function to use.
 * @return {Array} The sorted array.
 */
export default function sort(array, comparator = compare) {
  if (!array) {
    return [];
  }

  const a = array.slice();

  timsort(a, comparator);

  return a;
}

/**
 * Compare two elements.
 *
 * @param {*} a The first element.
 * @param {*} b The second element.
 * @return {number} 1 if `a > b`, -1 if `a < b`, and 0 if `a == b`.
 * @private
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  return a > b ? 1 : -1;
}
