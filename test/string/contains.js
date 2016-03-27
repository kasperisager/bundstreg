import test from 'ava';
import contains from '../../lib/string/contains';

test('contains() checks if a string contains a query string', async t => {
  const fixtures = [
    [['foo', 'oo'], true],
    [['foo', 'oo', 1], true],
    [['foo', 'oo', 2], false]
  ];

  for (const [[s, q, p], r] of fixtures) {
    t.is(contains(s, q, p), r);
  }
});

test('contains() returns false if no string is given', async t => {
  t.false(contains());
});

test('contains() returns false if no query string is given', async t => {
  t.false(contains('foo'));
});
