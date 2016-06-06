import test from 'ava';
import {startsWith} from '../../lib/string/starts-with';

test('startsWith() checks if a string starts with a given query string', async t => {
  const fixtures = [
    [['foo', 'fo'], true],
    [['foo', 'fo', 1], false],
    [['foo', 'oo', 1], true]
  ];

  for (const [[s, q, p], r] of fixtures) {
    t.is(startsWith(s, q, p), r);
  }
});

test('startsWith() returns false if no string is given', async t => {
  t.false(startsWith());
});

test('startsWith() returns false if no query string is given', async t => {
  t.false(startsWith('foo'));
});

test('startsWith() returns false if given a query string longer than the string', async t => {
  t.false(startsWith('foo', 'fooo'));
});
