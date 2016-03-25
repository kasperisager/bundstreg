import test from 'ava';
import each from '../../lib/array/each';

test('each() iterates over an array', async t => {
  const a = ['foo', 'bar', 'baz'];
  let c = 0;

  t.plan(6);

  each(a, (e, i) => {
    t.ok(i === c++);
    t.ok(e === a[i]);
  });
});
