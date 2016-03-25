/**
 * Check if two values are the same. This is neither the same as the `==` operator nor the `===` operator as `is()`
 * treats `+0` and `-0` as being not equal and `NaN` as being equal to itself.
 *
 * @example
 * // These are all true:
 * is(173, 173);
 * is('foo', 'foo');
 * is(0, 0);
 * is(NaN, NaN);
 * is(null, null);
 *
 * // These are all false:
 * is('foo', 'bar');
 * is(0, -0);
 * is({}, {});
 * is([], []);
 *
 * @param {*} x The first value.
 * @param {*} y The second value.
 * @return {boolean} `true` if the values are the same, otherwise `false`.
 */
export default function is(x, y) {
  return (x === y) ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
}
