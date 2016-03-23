import test from 'ava';
import keys from '../../lib/object/keys';

test('keys() returns the keys of an object', async t => {
  const o = {foo: 1, bar: 2, baz: 3};
  const k = keys(o);

  t.same(k, ['foo', 'bar', 'baz']);
});
