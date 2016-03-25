import test from 'ava';
import map from '../../lib/array/map';

test('map() maps over an array', async t => {
  const a = [1, 2, 3];
  const c = map(a, (e, i) => e + i);

  t.same(c, [1, 3, 5]);
});
