import test from 'ava';
import {every} from '../../lib/array/every';

test('every() checks whether all items of an array match a predicate', async t => {
  const a = [1, 3];
  const b = [2, 4];
  const c = [1, 2];
  const e = n => n % 2 === 0;

  t.false(every(a, e));
  t.true(every(b, e));
  t.false(every(c, e));
});

test('every() returns true if no array is given', async t => {
  t.true(every());
});

test('every() returns true if no predicate is given', async t => {
  t.true(every([1, 2, 3]));
});
