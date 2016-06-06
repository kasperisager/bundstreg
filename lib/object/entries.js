/**
 * Get the entries of an object as an array of `[key, value]` pairs.
 *
 * @example
 * const o = {foo: 1, bar: 2};
 * entries(o);
 * // => [['foo', 1], ['bar', 2]]
 *
 * @param {Object} object The object whose entries to get.
 * @return {Array} The entries of the object.
 */
export function entries(object) {
  let e = [];

  if (!object) {
    return e;
  }

  const keys = Object.keys(object);

  for (let i = 0, n = keys.length; i < n; i++) {
    const k = keys[i];

    e[i] = [k, object[k]];
  }

  return e;
}
