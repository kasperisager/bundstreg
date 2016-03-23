export default function endsWith(string, query, position = string.length) {
  const {min, max} = Math;

  const sl = string.length;
  const ql = query.length;
  const s = min(max(0, position), sl) - ql;

  if (s < 0) {
    return false;
  }

  let i = -1;

  while (++i < ql) {
    if (string.charCodeAt(s + i) !== query.charCodeAt(i)) {
      return false;
    }
  }

  return true;
}
