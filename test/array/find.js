import test from 'ava';
import find from '../../lib/array/find';

test('find() finds the first element of an array matching a predicate', async t => {
  const a = [1, 2, 3, 4, 5];

  t.is(find(a, e => e > 3), 4);
  t.is(find(a, e => e > 5), undefined);
});
