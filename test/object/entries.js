import test from 'ava';
import entries from '../../lib/object/entries';

test('entries() returns the key/value pairs of an object', async t => {
  const o = {foo: 1, bar: 2, baz: 3};
  const e = entries(o);

  t.same(e, [['foo', 1], ['bar', 2], ['baz', 3]]);
});

test('entries() returns an empty array if no object is given', async t => {
  t.same(entries(), []);
});
