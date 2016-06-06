import test from 'ava';
import {is} from '../../lib/value/is';

test('is() checks if two values are the same', async t => {
  const fixtures = [
    undefined, null,
    true, false,
    {}, {}, [], [],
    'foo', 'bar',
    0, -0, 123, -123, NaN
  ];

  for (let i = 0, n = fixtures.length; i < n; i++) {
    t.true(is(fixtures[i], fixtures[i]));

    for (let j = i + 1; j < n; j++) {
      t.false(is(fixtures[i], fixtures[j]));
    }
  }
});
