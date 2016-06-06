import test from 'ava';
import {reduce} from '../../lib/array/reduce';

test('reduce() folds over an array', async t => {
  const a = [1, 2, 3, 4];
  const s = (acc, e) => acc + e;

  t.is(reduce(a, s), 10);
  t.is(reduce(a, s, 5), 15);
});

test('reduce() does nothing if no array is given', async t => {
  t.is(reduce(), undefined);
});

test('reduce() does nothing if no iteratee is given', async t => {
  t.is(reduce([1, 2, 3]), undefined);
});
