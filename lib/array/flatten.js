/**
 * Flatten an array of arrays.
 *
 * @example
 * flatten([[1, 2], [3, 4], [5, 6]]);
 * // => [1, 2, 3, 4, 5, 6]
 *
 * @param {Array} array The array to flatten.
 * @return {Array} The flattened array.
 */
export function flatten(array) {
  if (!array) {
    return [];
  }

  const n = array.length;

  let t = 0;
  let u = 0;

  for (let i = 0; i < n; i++) {
    t += array[i].length;
  }

  const a = new Array(t);

  for (let i = 0; i < n; i++) {
    const c = array[i];

    for (let j = 0, m = c.length; j < m; j++) {
      a[u++] = c[j];
    }
  }

  return a;
}
