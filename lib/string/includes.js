export default function includes(string, query, position = 0) {
  const {min, max} = Math;

  const sl = string.length;
  const ql = query.length;
  const s = min(max(0, position), sl);

  if (ql + s > sl) {
    return false;
  }

  return string.indexOf(query, s) !== -1;
}
