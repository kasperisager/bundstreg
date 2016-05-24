import test from 'ava';
import slice from '../../lib/array/slice';

test('slice() creates a copy of an array', async t => {
  const a = [1, 2, 3, 4];
  const s = slice(a);

  t.not(a, s);
  t.deepEqual(a, s);

  t.deepEqual(slice(a, 1), [2, 3, 4]);
  t.deepEqual(slice(a, 2), [3, 4]);
  t.deepEqual(slice(a, -1), [4]);
  t.deepEqual(slice(a, -2), [3, 4]);
  t.deepEqual(slice(a, -5), [1, 2, 3, 4]);
  t.deepEqual(slice(a, 1, 3), [2, 3]);
  t.deepEqual(slice(a, 0, -1), [1, 2, 3]);
  t.deepEqual(slice(a, 1, -1), [2, 3]);
  t.deepEqual(slice(a, 1, -2), [2]);
  t.deepEqual(slice(a, 1, -2), [2]);
  t.deepEqual(slice(a, 2, 1), []);
});

test('slice() returns an empty array if given no array', async t => {
  t.deepEqual(slice(), []);
});
