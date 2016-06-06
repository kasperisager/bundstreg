import test from 'ava';
import {reverse} from '../../lib/array/reverse';

test('reverse() reverses the elements of an array', async t => {
  const fixtures = [
    [],
    [1],
    [1, 2],
    [1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5]
  ];

  for (const a of fixtures) {
    t.deepEqual(reverse(a), a.reverse());
  }
});

test('reverse() returns an empty array if given no array', async t => {
  t.deepEqual(reverse(), []);
});
