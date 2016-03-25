import test from 'ava';
import toLower from '../../lib/string/to-lower';

test('toLower() lowercases a string', async t => {
  const fixtures = [
    ['FOo', 'foo']
  ];

  for (const [s, r] of fixtures) {
    t.is(toLower(s), r);
  }
});
