import test from 'ava';
import {filter} from '../../lib/array/filter';

test('filter() filters items of an array by predicate', async t => {
  const a = [1, 2, 3, 4];
  const f = filter(a, n => n % 2 === 0);

  t.deepEqual(f, [2, 4]);
});

test('filter() returns an empty array if no array is given', async t => {
  t.deepEqual(filter(), []);
});

test('filter() returns the unmodified array if no predicate is given', async t => {
  t.deepEqual(filter([1, 2, 3]), [1, 2, 3]);
});
