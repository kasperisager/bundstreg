import test from 'ava';
import concat from '../../lib/array/concat';
import sort from '../../lib/array/sort';

function random(d, type) {
  const f = [];

  for (let i = 1; i <= d; i++) {
    const a = [];

    for (let j = 0; j < i; j++) {
      a[j] = type(Math.floor(Math.random() * i));
    }

    f[i - 1] = a;
  }

  return f;
}

function sorted(d, type) {
  const f = [];

  for (let i = 1; i <= d; i++) {
    const a = [];

    for (let j = 0; j < i; j++) {
      a[j] = type(j + 1);
    }

    f[i - 1] = a;
  }

  return f;
}

function reversed(d, type) {
  const f = [];

  for (let i = 1; i <= d; i++) {
    const a = [];

    for (let j = 0; j < i; j++) {
      a[j] = type(i - j);
    }

    f[i - 1] = a;
  }

  return f;
}

function fixtures(d, type) {
  return concat(random(d, type), sorted(d, type), reversed(d, type));
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
