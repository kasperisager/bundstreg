import test from 'ava';
import reduce from '../../lib/array/reduce';

test('reduce() folds over an array', async t => {
  const a = [1, 2, 3, 4];
  const s = (acc, e) => acc + e;

  t.is(reduce(a, s), 10);
  t.is(reduce(a, s, 5), 15);
});
