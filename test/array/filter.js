import test from 'ava';
import filter from '../../lib/array/filter';

test('filter() filters items of an array by predicate', async t => {
  const a = [1, 2, 3, 4];
  const f = filter(a, n => n % 2 === 0);
  t.same(f, [2, 4]);
});
