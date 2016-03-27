import test from 'ava';
import endsWith from '../../lib/string/ends-with';

test('endsWith() checks if a string ends with a given query string', async t => {
  const fixtures = [
    [['foo', 'oo'], true],
    [['foo', 'oo', 2], false],
    [['foo', 'fo', 2], true]
  ];

  for (const [[s, q, p], r] of fixtures) {
    t.is(endsWith(s, q, p), r);
  }
});

test('endsWith() returns false if no string is given', async t => {
  t.false(endsWith());
});

test('endsWith() returns false if no query string is given', async t => {
  t.false(endsWith('foo'));
});

test('endsWith() returns false if given a query string longer than the string', async t => {
  t.false(endsWith('foo', 'fooo'));
});
