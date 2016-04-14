import test from 'ava';
import map from '../../lib/array/map';

test('map() maps over an array', async t => {
  const a = [1, 2, 3];
  const c = map(a, (e, i) => e + i);

  t.deepEqual(c, [1, 3, 5]);
});

test('map() returns an empty array if no array is given', async t => {
  t.deepEqual(map(), []);
});

test('map() returns the unmodified array if no iteratee is given', async t => {
  t.deepEqual(map([1, 2, 3]), [1, 2, 3]);
});
