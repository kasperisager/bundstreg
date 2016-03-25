import test from 'ava';
import replace from '../../lib/string/replace';

test('replace() replaces occurences of a pattern in a string', async t => {
  const fixtures = [
    [['foo bar', 'bar', 'bar baz'], 'foo bar baz']
  ];

  for (const [[s, p, r], n] of fixtures) {
    t.is(replace(s, p, r), n);
  }
});
