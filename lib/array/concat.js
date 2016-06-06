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
  const a = [];

  for (let i = 0, n = arguments.length; i < n; i++) {
    const c = arguments[i];

    for (let j = 0, m = c.length; j < m; j++) {
      a[a.length] = c[j];
    }
  }

  return a;
}
