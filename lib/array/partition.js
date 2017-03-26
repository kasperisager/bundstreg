/**
 * Partition an array into two arrays where the first contains elements for which the predicate returns truthy.
 *
 * @example
 * const a = [1, 2, 3, 4];
 * partition(a, (e, i) => e % 2 === 0);
 * // => [[2, 4], [1, 3]]
 *
 * @param {Array} array The array to partition.
 * @param {Function} predicate The predicate to invoke on each element.
 * @return {Array} An array containing the two paritions.
 */
export function partition(array, predicate) {
  if (!array) {
    return [[], []];
  }

  if (!predicate) {
    return [array, []];
  }

  const n = array.length;
  const p = new Array(n);

  let t = 0;
  let u = n;

  for (let i = 0; i < n; i++) {
    const e = array[i];

    if (predicate(e, i)) {
      p[t++] = e;
    } else {
      p[--u] = e;
    }
  }

  const l = new Array(t);
  const r = new Array(n - t);

  for (let i = 0; i < t; i++) {
    l[i] = p[i];
  }

  for (let i = u; i < n; i++) {
    r[n - i - 1] = p[i];
  }

  return [l, r];
}
