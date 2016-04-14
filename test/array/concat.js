import test from 'ava';
import concat from '../../lib/array/concat';

test('concat() concatenates two or more arrays', async t => {
  const a = [1, 2, 3];
  const b = concat(a, a, a);

  t.deepEqual(a, [1, 2, 3]);
  t.deepEqual(b, [1, 2, 3, 1, 2, 3, 1, 2, 3]);
});

test('concat() returns an empty array if no array is given', async t => {
  t.deepEqual(concat(), []);
});

test('concat() returns the unmodified first array if no additional arrays are given', async t => {
  t.deepEqual(concat([1, 2, 3]), [1, 2, 3]);
});
