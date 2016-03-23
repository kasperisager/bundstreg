export default function includes(array, query, position = 0) {
  const {max} = Math;
  const n = array.length;

  if (n === 0) {
    return false;
  }

  const k = position >= 0 ? position : max(n + position, 0);

  const nan = query !== query;

  for (let i = k; i < n; i++) {
    const e = array[i];

    if (e === query || e !== e && nan) {
      return true;
    }
  }

  return false;
}
