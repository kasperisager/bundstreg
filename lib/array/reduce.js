import each from './each';

/**
 * @param {Array} array
 * @param {Function} iteratee
 * @param {*} accumulator
 * @return {*}
 */
export default function reduce(array, iteratee, accumulator) {
  each(array, (e, i) => {
    accumulator = iteratee(accumulator, e, i);
  });

  return accumulator;
}
