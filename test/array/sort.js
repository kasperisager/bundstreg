import test from 'ava';
import sort from '../../lib/array/sort';

function fixtures(d, type) {
  const {floor, random} = Math;
  const f = [];

  for (let i = 1; i <= 100; i++) {
    const a = [];

    for (let j = 0; j < i; j++) {
      a[j] = type(floor(random() * i));
    }

    f[i - 1] = a;
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
