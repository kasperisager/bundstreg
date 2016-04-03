export function random(d, type) {
  const a = [];

  for (let i = 0; i < d; i++) {
    a[i] = type(Math.floor(Math.random() * d));
  }

  return a;
}

export function sorted(d, type) {
  const a = [];

  for (let i = 0; i < d; i++) {
    a[i] = type(i + 1);
  }

  return a;
}

export function reversed(d, type) {
  const a = [];

  for (let i = 0; i < d; i++) {
    a[i] = type(d - i);
  }

  return a;
}
