/**
 * Sort the elements of an array.
 *
 * @example
 * const a = [3, 1, 2, 7, 6, 4, 5, 10, 8, 9];
 * sort(a);
 * // => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * @param {Array} array The array to sort.
 * @param {Function} [comparator] The comparator function to use.
 * @return {Array} The sorted array.
 */
export function sort(array, comparator = compare) {
  if (!array) {
    return [];
  }

  const n = array.length;
  const a = new Array(n);
  const s = [];

  for (let i = 0; i < n; i++) {
    a[i] = array[i];
  }

  let t = 0;

  s[t++] = 0;
  s[t++] = a.length - 1;

  while (t > 0) {
    const h = s[--t];
    const l = s[--t];

    if (h - l <= 20) {
      insertionSort(a, l, h, comparator);
    } else {
      const p = partition(a, l, h, comparator);

      if (p > l) {
        s[t++] = l;
        s[t++] = p;
      }

      if (p + 1 < h) {
        s[t++] = p + 1;
        s[t++] = h;
      }
    }
  }

  return a;
}

/**
 * Partition a subarray according to the Hoare partitioning scheme.
 *
 * @see https://en.wikipedia.org/wiki/Quicksort#Hoare_partition_scheme
 *
 * @param {Array} a The array to partition.
 * @param {number} l The lower index of the partition.
 * @param {number} h The higher index of the partition.
 * @param {Function} c The comparator function.
 * @return {number} The final position of the pivot.
 * @private
 */
function partition(a, l, h, c) {
  const p = a[(l + ((h - l) / 2)) | 0];

  let i = l - 1;
  let j = h + 1;
  let k;

  while (k === undefined) {
    do {
      i++;
    } while (c(a[i], p) < 0);

    do {
      j--;
    } while (c(a[j], p) > 0);

    if (i < j) {
      [a[i], a[j]] = [a[j], a[i]];
    } else {
      k = j;
    }
  }

  return k;
}

/**
 * Insertion sort an array.
 *
 * @param {Array} a The array to insertion sort.
 * @param {number} l The lower index of the sorting.
 * @param {number} h The higher index of the sorting.
 * @param {Function} c The comparator to use.
 * @private
 */
function insertionSort(a, l, h, c) {
  for (let i = l; i <= h; i++) {
    const x = a[i];
    let j = i - 1;

    while (j >= 0 && c(a[j], x) > 0) {
      a[j + 1] = a[j];
      j--;
    }

    a[j + 1] = x;
  }
}

/**
 * Compare two elements.
 *
 * @param {*} a The first element.
 * @param {*} b The second element.
 * @return {number} 1 if `a > b`, -1 if `a < b`, and 0 if `a == b`.
 * @private
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  return a > b ? 1 : -1;
}
