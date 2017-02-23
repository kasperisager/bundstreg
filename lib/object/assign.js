/**
 * Copy the key/values pairs of one or more source objects to a target object.
 *
 * @example
 * const o = {foo: 1};
 * assign(o, {bar: 2});
 * // => {foo: 1, bar: 2}
 *
 * @param {Object} target The object to copy to.
 * @param {...Object} sources The objects to copy from.
 * @return {Object} The target object.
 */
export function assign(target) {
  for (let i = 1, n = arguments.length; i < n; i++) {
    const source = arguments[i];
    const keys = Object.keys(source);

    for (let j = 0, m = keys.length; j < m; j++) {
      const k = keys[j];
      const v = source[k];

      if (v !== undefined && v !== null) {
        target[k] = v;
      }
    }
  }

  return target;
}
