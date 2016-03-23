/**
 * @param {Array} array
 * @param {Function} iteratee
 */
export default function each(array, iteratee) {
  for (let i = 0, n = array.length; i < n; i++) {
    iteratee(array[i], i);
  }
}
