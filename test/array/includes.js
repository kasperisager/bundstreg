import test from 'ava';
import includes from '../../lib/array/includes';

test('includes() checks if an array includes a specific element', async t => {
  const a = [1, 2, 3, 4, 5];

  t.true(includes(a, 4));
  t.false(includes(a, 6));
});
