/**
 * Reduce an array to value accumulated by invoking an iteratee on each element of the array.
 *
 * @example
 * const a = [1, 2, 3];
 * reduce(a, (s, n) => s + n);
 * // => 6
 *
 * @param {Array} array The array to reduce.
 * @param {Function} iteratee The iteratee to invoke of each element.
 * @param {*} [accumulator=array[0]] The initial value.
 * @return {*} The accumulated value.
 */
export default function reduce(array, iteratee, accumulator) {
  let i = 0;
  let a = accumulator === undefined ? array[i++] : accumulator;

  for (let n = array.length; i < n; i++) {
    a = iteratee(a, array[i], i);
  }

  return a;
}
