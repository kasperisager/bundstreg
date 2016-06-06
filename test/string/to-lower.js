import test from 'ava';
import {toLower} from '../../lib/string/to-lower';

test('toLower() lowercases a string', async t => {
  const fixtures = [
    ['FOo', 'foo']
  ];

  for (const [s, r] of fixtures) {
    t.is(toLower(s), r);
  }
});

test('toLower() returns an empty string if given no string', async t => {
  t.is(toLower(), '');
});
