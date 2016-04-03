/**
 * Get the values of an object as an array.
 *
 * @example
 * const o = {foo: 1, bar: 2};
 * keys(o);
 * // => [1, 2]
 *
 * @param {Object} object The object whose values to get.
 * @return {Array} The values of the object.
 */
export default function values(object) {
  let v = [];

  if (!object) {
    return v;
  }

  const keys = Object.keys(object);

  for (let i = 0, n = keys.length; i < n; i++) {
    v[i] = object[keys[i]];
  }

  return v;
}
