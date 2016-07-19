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
export function values(object) {
  if (!object) {
    return [];
  }

  const keys = Object.keys(object);

  const n = keys.length;
  const v = new Array(n);

  for (let i = 0; i < n; i++) {
    v[i] = object[keys[i]];
  }

  return v;
}
