import test from 'ava';
import {partition} from '../../lib/array/partition';

test('partition() partitions items of an array by predicate', async t => {
  const a = [1, 2, 3, 4];
  const p = partition(a, n => n % 2 === 0);

  t.deepEqual(p, [[2, 4], [1, 3]]);
});

test('partition() returns empty partitions if no array is given', async t => {
  t.deepEqual(partition(), [[], []]);
});

test('partition() returns the unmodified array in the first partition if no predicate is given', async t => {
  t.deepEqual(partition([1, 2, 3]), [[1, 2, 3], []]);
});
