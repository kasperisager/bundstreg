import test from 'ava';
import {replace} from '../../lib/string/replace';

test('replace() replaces occurences of a pattern in a string', async t => {
  const fixtures = [
    [['foo bar', 'bar', 'bar baz'], 'foo bar baz']
  ];

  for (const [[s, p, r], n] of fixtures) {
    t.is(replace(s, p, r), n);
  }
});

test('replace() returns an empty string if given no string', async t => {
  t.is(replace(), '');
});

test('replace() returns the string if given no pattern', async t => {
  t.is(replace('foo'), 'foo');
});

test('replace() returns the string if given no replacement', async t => {
  t.is(replace('foo', 'foo'), 'foo');
});
