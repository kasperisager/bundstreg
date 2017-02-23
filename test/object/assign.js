import test from 'ava';
import {assign} from '../../lib/object/assign';

test('assign() copies the key/value pairs of one or more source objects to a target object', async t => {
  const o = {foo: 'foo', bar: 'bar', count: 1};

  t.is(assign(o, {count: 2}, {count: 3}), o);
  t.is(o.count, 3);
});
