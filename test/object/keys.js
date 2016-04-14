import test from 'ava';
import keys from '../../lib/object/keys';

test('keys() returns the keys of an object', async t => {
  const o = {foo: 1, bar: 2, baz: 3};
  const k = keys(o);

  t.deepEqual(k, ['foo', 'bar', 'baz']);
});

test('keys() returns an empty array if no object is given', async t => {
  t.deepEqual(keys(), []);
});
