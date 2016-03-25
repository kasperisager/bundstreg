/**
 * Get the keys of an object as an array.
 *
 * @example
 * const o = {foo: 1, bar: 2};
 * keys(o);
 * // => ['foo', 'bar']
 *
 * @param {Object} object The object whose keys to get.
 * @return {Array} The keys of the object.
 */
export default function keys(object) {
  if (!object) {
    return [];
  }

  return Object.keys(object);
}
