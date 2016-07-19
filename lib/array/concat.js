/**
 * Join a number of arrays to a single array.
 *
 * @example
 * concat([1, 2], [3, 4], [5, 6]);
 * // => [1, 2, 3, 4, 5, 6]
 *
 * @param {...Array} arrays The arrays to concatenate.
 * @return {Array} The concatenated array.
 */
export function concat() {
  const n = arguments.length;

  let t = 0;
  let u = 0;

  for (let i = 0; i < n; i++) {
    t += arguments[i].length;
  }

  const a = new Array(t);

  for (let i = 0; i < n; i++) {
    const c = arguments[i];

    for (let j = 0, m = c.length; j < m; j++) {
      a[u++] = c[j];
    }
  }

  return a;
}
