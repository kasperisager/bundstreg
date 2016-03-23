import each from '../array/each';
import keys from './keys';

/**
 * @param {Object} object
 * @return {Array}
 */
export default function values(object) {
  let v = [];

  each(keys(object), (k, i) => {
    v[i] = object[k];
  });

  return v;
}
