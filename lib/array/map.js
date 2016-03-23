import each from './each';

/**
 * @param {Array} array
 * @param {Function} iteratee
 * @return {Array}
 */
export default function map(array, iteratee) {
  let c = 0;
  let r = Array(array.length);

  each(array, (e, i) => {
    r[c++] = iteratee(e, i);
  });

  return r;
}
