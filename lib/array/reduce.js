import each from './each';

export default function reduce(array, iteratee, accumulator) {
  each(array, (e, i) => {
    accumulator = iteratee(accumulator, e, i);
  });

  return accumulator;
}
