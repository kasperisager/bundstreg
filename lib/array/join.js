import each from './each';

/**
 * @param {Array} array
 * @param {string} [separator=',']
 * @return {string}
 */
export default function join(array, separator = ',') {
  let s = '';

  each(array, (e, i) => {
    s += (i === 0 ? '' : separator) + e;
  });

  return s;
}
