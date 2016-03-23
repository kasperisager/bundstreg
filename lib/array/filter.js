import each from './each';

export default function filter(array, predicate) {
  let c = 0;
  let r = [];

  each(array, (e, i) => {
    if (predicate(e, i)) {
      r[c++] = e;
    }
  });

  return r;
}
