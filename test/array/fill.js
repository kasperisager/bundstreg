import test from 'ava';
import {fill} from '../../lib/array/fill';

test('fill()', async t => {
  const a = [1, 2, 3, 4];

  t.deepEqual(fill(a, 5), [5, 5, 5, 5]);
  t.deepEqual(fill(a, 5, 2), [1, 2, 5, 5]);
  t.deepEqual(fill(a, 5, -1), [1, 2, 3, 5]);
  t.deepEqual(fill(a, 5, 1, 3), [1, 5, 5, 4]);
  t.deepEqual(fill(a, 5, 1, 5), [1, 5, 5, 5]);
  t.deepEqual(fill(a, 5, -5, 3), [5, 5, 5, 4]);
  t.deepEqual(fill(a, 5, 3, 1), [1, 2, 3, 4]);
  t.deepEqual(fill(a, 5, 1, -2), [1, 5, 3, 4]);
});

test('fill() returns an empty array if no array is given', async t => {
  t.deepEqual(fill(), []);
});
