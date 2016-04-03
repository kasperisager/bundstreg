import test from 'ava';
import sort from '../../lib/array/sort';
import {random, sorted, reversed} from '../helpers/generate-array';

function fixtures(d, type) {
  const f = [];

  for (let i = 1; i <= d; i++) {
    f[f.length] = random(i, type);
    f[f.length] = sorted(i, type);
    f[f.length] = reversed(i, type);
  }

  return f;
}

test('sort() sorts an array of numbers', async t => {
  for (const a of fixtures(100, Number)) {
    t.same(sort(a), a.sort((a, b) => a - b));
  }
});

test('sort() sorts an array of strings', async t => {
  for (const a of fixtures(100, String)) {
    t.same(sort(a), a.sort());
  }
});

test('sort() allows specifying a custom comparator', async t => {
  function compare(a, b) {
    return b - a;
  }

  for (const a of fixtures(100, Number)) {
    t.same(sort(a, compare), a.sort(compare));
  }
});

test('sort() returns an empty array if no array is given', async t => {
  t.same(sort(), []);
});
