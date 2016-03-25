/**
 * Loop over an array and invoke an iteratee on each array element.
 *
 * @example
 * const a = [1, 2, 3];
 * each(a, (e, i) => console.log(e, i));
 *
 * @param {Array} array The array to loop over.
 * @param {Function} iteratee The iteratee to invoke on each element.
 */
export default function each(array, iteratee) {
  if (!array || !iteratee) {
    return;
  }

  for (let i = 0, n = array.length; i < n; i++) {
    iteratee(array[i], i);
  }
}
