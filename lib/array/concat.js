export default function concat(array, ...rest) {
  if (!array) {
    return [];
  }

  return array.concat(...rest);
}
