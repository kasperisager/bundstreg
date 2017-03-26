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

  for (let i = 0; i < n; i++) {
    a[i] = array[i];
  }

  // First pass: 15-sort the array using quicksort.
  quickSort(a, 0, n - 1, 15, comparator);

  // Second pass: Fully sort the array using insertion sort.
  insertionSort(a, 0, n - 1, comparator);

  return a;
}

/**
 * Quick sort an array.
 *
 * @see https://en.wikipedia.org/wiki/Quicksort
 *
 * @param {Array} a The array to quick sort.
 * @param {number} l The lower index of the sorting.
 * @param {number} h The higher index of the sorting.
 * @param {number} k The sorting cutoff.
 * @param {Function} c The comparator to use.
 * @private
 */
function quickSort(a, l, h, k, c) {
  const s = [];

  let t = 0;

  s[t++] = l;
  s[t++] = h;

  while (t > 0) {
    h = s[--t];
    l = s[--t];

    if (h - l > k) {
      const p = partition(a, l, h, c);

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
}

/**
 * Select the pivot element using the median-of-three rule.
 *
 * @see https://en.wikipedia.org/wiki/Quicksort#Choice_of_pivot
 *
 * @param {Array} a The array to select a pivot in.
 * @param {number} l The lower index of the pivot selection.
 * @param {number} h The higher index of the pivot selection.
 * @param {Function} c The comparator function.
 * @return {number} The selected pivot.
 * @private
 */
function pivot(a, l, h, c) {
  const p = (l + ((h - l) / 2)) | 0;

  if (c(a[h], a[l]) < 0) {
    [a[l], a[h]] = [a[h], a[l]];
  }

  if (c(a[p], a[l]) < 0) {
    [a[l], a[p]] = [a[p], a[l]];
  }

  if (c(a[h], a[p]) < 0) {
    [a[h], a[p]] = [a[p], a[h]];
  }

  return p;
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
  const p = a[pivot(a, l, h, c)];

  let i = l - 1;
  let j = h + 1;

  for (;;) {
    do {
      i++;
    } while (c(a[i], p) < 0);

    do {
      j--;
    } while (c(a[j], p) > 0);

    if (i < j) {
      [a[i], a[j]] = [a[j], a[i]];
    } else {
      return j;
    }
  }
}

/**
 * Insertion sort an array.
 *
 * @see https://en.wikipedia.org/wiki/Insertion_sort
 *
 * @param {Array} a The array to insertion sort.
 * @param {number} l The lower index of the sorting.
 * @param {number} h The higher index of the sorting.
 * @param {Function} c The comparator to use.
 * @private
 */
function insertionSort(a, l, h, c) {
  for (let i = l + 1; i <= h; i++) {
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
