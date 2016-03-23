import each from '../array/each';
import keys from './keys';

export default function values(object) {
  let v = [];

  each(keys(object), (k, i) => {
    v[i] = object[k];
  });

  return v;
}
