import each from './each';

export default function join(array, separator = ',') {
  let s = '';

  each(array, (e, i) => {
    s += (i === 0 ? '' : separator) + e;
  });

  return s;
}
