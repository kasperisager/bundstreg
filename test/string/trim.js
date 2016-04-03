import test from 'ava';
import trim from '../../lib/string/trim';

test('trim() trims trailing whitespace from a string', async t => {
  const fixtures = [
    ['foo', 'foo'],
    [' foo ', 'foo'],
    [' foo bar ', 'foo bar'],
    ['  \t   foo   \t', 'foo']
  ];

  for (const [s, r] of fixtures) {
    t.is(trim(s), r);
  }
});

test('trim() returns an empty string if given no string', async t => {
  t.is(trim(), '');
});
