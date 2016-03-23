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
