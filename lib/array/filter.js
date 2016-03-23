import each from './each';

/**
 * @param {Array} array
 * @param {Function} predicate
 * @return {Array}
 */
export default function filter(array, predicate) {
  let c = 0;
  let r = [];

  each(array, (e, i) => {
    if (predicate(e, i)) {
      r[c++] = e;
    }
  });

  return r;
}
