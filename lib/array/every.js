export default function every(array, predicate) {
  for (let i = 0, n = array.length; i < n; i++) {
    if (!predicate(array[i], i)) {
      return false;
    }
  }

  return true;
}
