import test from 'ava';
import {find} from '../../lib/array/find';

test('find() finds the first element of an array matching a predicate', async t => {
  const a = [1, 2, 3, 4, 5];

  t.is(find(a, e => e > 3), 4);
  t.is(find(a, e => e > 5), undefined);
});

test('find() returns nothing if no array is given', async t => {
  t.is(find(), undefined);
});

test('find() returns nothing if no predicate is given', async t => {
  t.is(find([1, 2, 3]), undefined);
});
