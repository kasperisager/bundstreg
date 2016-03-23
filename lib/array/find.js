/**
 * @param {Array} array
 * @param {Function} predicate
 * @return {*}
 */
export default function find(array, predicate) {
  for (let i = 0, n = array.length; i < n; i++) {
    const e = array[i];

    if (predicate(e, i)) {
      return e;
    }
  }
}
