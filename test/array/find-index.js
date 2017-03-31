import test from 'ava';
import {findIndex} from '../../lib/array/find-index';

test('findIndex() finds the index of the first element of an array matching a predicate', async t => {
  const a = [1, 2, 3, 4, 5];

  t.is(findIndex(a, e => e > 3), 3);
  t.is(findIndex(a, e => e > 5), -1);
});

test('findIndex() returns -1 if no array is given', async t => {
  t.is(findIndex(), -1);
});

test('findIndex() returns -1 if no predicate is given', async t => {
  t.is(findIndex([1, 2, 3]), -1);
});
