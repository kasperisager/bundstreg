import test from 'ava';
import {flatten} from '../../lib/array/flatten';

test('flatten() flattens an array of arrays', async t => {
  const a = [[1, 2], [3, 4], [5, 6]];
  const b = flatten(a);

  t.deepEqual(b, [1, 2, 3, 4, 5, 6]);
});

test('flatten() returns an empty array if no array is given', async t => {
  t.deepEqual(flatten(), []);
});
