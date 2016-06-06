import test from 'ava';
import {toUpper} from '../../lib/string/to-upper';

test('toUpper() uppercases a string', async t => {
  const fixtures = [
    ['foO', 'FOO']
  ];

  for (const [s, r] of fixtures) {
    t.is(toUpper(s), r);
  }
});

test('toUpper() returns an empty string if given no string', async t => {
  t.is(toUpper(), '');
});
