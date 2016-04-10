import test from 'ava';
import join from '../../lib/array/join';

test('join() joins the elements of an array to a string using a separator', async t => {
  const a = ['foo', 'bar', 42];

  t.is(join(a), 'foo,bar,42');
  t.is(join(a, ''), 'foobar42');
  t.is(join(a, ', '), 'foo, bar, 42');
});

test('join() returns an empty string if no array is given', async t => {
  t.is(join(), '');
});

test('join() treats undefined and null elements as empty strings', async t => {
  t.is(join([null, 1, 2, undefined, 3]), ',1,2,,3');
});
