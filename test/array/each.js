import test from 'ava';
import each from '../../lib/array/each';

test('each() iterates over an array', async t => {
  const a = ['foo', 'bar', 'baz'];
  let c = 0;

  t.plan(7);

  t.is(each(a, (e, i) => {
    t.ok(i === c++);
    t.ok(e === a[i]);
  }), undefined);
});

test('each() does nothing if no array is given', async t => {
  t.is(each(), undefined);
});

test('each() does nothing if no iteratee is given', async t => {
  t.is(each([1, 2, 3]), undefined);
});
