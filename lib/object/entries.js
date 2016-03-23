import each from '../array/each';
import keys from './keys';

/**
 * @param {Object} object
 * @return {Array}
 */
export default function entries(object) {
  let e = [];

  each(keys(object), (k, i) => {
    e[i] = [k, object[k]];
  });

  return e;
}
