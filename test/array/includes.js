import test from 'ava';
import {includes} from '../../lib/array/includes';

test('includes() checks if an array includes a specific element', async t => {
  const a = [1, 2, 3];

  t.true(includes(a, 1));
  t.true(includes(a, 2));
  t.true(includes(a, 3));
  t.false(includes(a, 4));
});

test('includes() allows specifying the position to start searching', async t => {
  const a = [1, 2, 3];

  t.true(includes(a, 1, 0));
  t.false(includes(a, 1, 1));
  t.true(includes(a, 2, 1));
});

test('includes() starts searching from the end of an array if given a negative position', async t => {
  const a = [1, 2, 3];

  t.true(includes(a, 2, -2));
  t.false(includes(a, 2, -1));
});

test('includes() ignores the position if a negative value smaller than size of the array is given', async t => {
  const a = [1, 2, 3];

  t.true(includes(a, 1, -4));
  t.true(includes(a, 2, -4));
  t.true(includes(a, 3, -4));
});

test('includes() can check if an array includes NaN', async t => {
  const a = [1, 2, 3];
  const b = [1, 2, NaN];

  t.false(includes(a, NaN));
  t.true(includes(b, NaN));
});

test('includes() returns false if no array is given', async t => {
  t.false(includes());
});

test('includes() returns false if an empty array is given', async t => {
  t.false(includes([]));
});
