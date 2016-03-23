/**
 * @param {*} x
 * @param {*} y
 * @return {boolean}
 */
export default function is(x, y) {
  return (x === y) ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
}
