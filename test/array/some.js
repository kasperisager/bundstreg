import test from 'ava';
import some from '../../lib/array/some';

test('some() checks whether any item of an array matches a predicate', async t => {
  const a = [1, 3];
  const b = [2, 4];
  const c = [1, 2];
  const e = n => n % 2 === 0;

  t.false(some(a, e));
  t.true(some(b, e));
  t.true(some(c, e));
});
