export function random(d, type) {
  const a = new Array(d);

  for (let i = 0; i < d; i++) {
    a[i] = type(Math.floor(Math.random() * d));
  }

  return a;
}

export function sorted(d, type) {
  const a = new Array(d);

  for (let i = 0; i < d; i++) {
    a[i] = type(i + 1);
  }

  return a;
}

export function reversed(d, type) {
  const a = new Array(d);

  for (let i = 0; i < d; i++) {
    a[i] = type(d - i);
  }

  return a;
}

export function same(d, type) {
  const a = new Array(d);
  const v = Math.random();

  for (let i = 0; i < d; i++) {
    a[i] = type(v);
  }

  return a;
}
