/**
 * @param {Array} array
 * @param {...Array} rest
 * @return {Array}
 */
export default function concat(array, ...rest) {
  if (!array) {
    return [];
  }

  return array.concat(...rest);
}
