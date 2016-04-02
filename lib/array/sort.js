const {floor} = Math;

/**
 * Sort the elements of an array using an iterative quicksort implementation with a cut-off to insertion sort for small
 * partitions.
 *
 * > __Note:__ Unlike the native `Array#sort()` sorting will happen on a copy of the array which therefore won't be
 * > modified.
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
export default function sort(array, comparator = compare) {
  if (!array) {
    return [];
  }

  const a = array.slice();
  const s = [];

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
 * Swap two elements of an array.
 *
 * @param {Array} a The array whose elements to swap.
 * @param {number} i The index of the first element.
 * @param {number} j The index of the second element.
 * @private
 */
function swap(a, i, j) {
  const t = a[i];
  a[i] = a[j];
  a[j] = t;
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
  const p = a[floor(l + (h - l) / 2)];

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
      swap(a, i, j);
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
