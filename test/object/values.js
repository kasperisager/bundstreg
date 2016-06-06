import test from 'ava';
import {values} from '../../lib/object/values';

test('values() returns the values of an object', async t => {
  const o = {foo: 1, bar: 2, baz: 3};
  const v = values(o);

  t.deepEqual(v, [1, 2, 3]);
});

test('values() returns an empty array if no object is given', async t => {
  t.deepEqual(values(), []);
});
