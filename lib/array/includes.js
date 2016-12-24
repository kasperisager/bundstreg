/**
 * Check if an array includes a specific element.
 *
 * @example
 * const a = [1, 2, 3];
 * includes(a, 2);
 * // => true
 *
 * @param {Array} array The array to check.
 * @param {*} query The element to check for.
 * @param {number} [position=0] The position at which to start looking.
 * @return {boolean} `true` if the array includes the element, otherwise `false`.
 */
export function includes(array, query, position = 0) {
  if (!array) {
    return false;
  }

  const n = array.length;

  if (n === 0) {
    return false;
  }

  let k;

  if (position >= 0) {
    k = position;
  } else {
    k = position + n;

    if (k < 0) {
      k = 0;
    }
  }

  const nan = query !== query;

  for (let i = k; i < n; i++) {
    const e = array[i];

    if (e === query || (e !== e && nan)) {
      return true;
    }
  }

  return false;
}
