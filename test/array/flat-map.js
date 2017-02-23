import test from 'ava';
import {flatMap} from '../../lib/array/flat-map';

test('flatMap() maps over an array and flattens the result', async t => {
  const a = [1, 2, 3];
  const c = flatMap(a, (e, i) => [e, i]);

  t.deepEqual(c, [1, 0, 2, 1, 3, 2]);
});

test('flatMap() returns an empty array if no array is given', async t => {
  t.deepEqual(flatMap(), []);
});

test('flatMap() returns the unmodified array if no iteratee is given', async t => {
  t.deepEqual(flatMap([1, 2, 3]), [1, 2, 3]);
});
