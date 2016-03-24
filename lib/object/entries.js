import each from '../array/each';
import keys from './keys';

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
export default function entries(object) {
  let e = [];

  each(keys(object), (k, i) => {
    e[i] = [k, object[k]];
  });

  return e;
}
