import each from '../array/each';
import keys from './keys';

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

  each(keys(object), (k, i) => {
    v[i] = object[k];
  });

  return v;
}
