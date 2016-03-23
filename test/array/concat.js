import test from 'ava';
import concat from '../../lib/array/concat';

test('concat() concatenates two or more arrays', async t => {
  const a = [1, 2, 3];
  const b = concat(a, a, a);

  t.same(a, [1, 2, 3]);
  t.same(b, [1, 2, 3, 1, 2, 3, 1, 2, 3]);
});
