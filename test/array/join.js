import test from 'ava';
import join from '../../lib/array/join';

test('join() joins the elements of an array to a string using a separator', async t => {
  const a = ['foo', 'bar', 42];

  t.is(join(a), 'foo,bar,42');
  t.is(join(a, ''), 'foobar42');
  t.is(join(a, ', '), 'foo, bar, 42');
});
