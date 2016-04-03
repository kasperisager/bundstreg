import bench from 'parkbench';
import _ from 'lodash';
import keys from '../../lib/object/keys';

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10};

bench()
  .add('keys()', () => {
    keys(obj);
  })
  .add('_.keys()', () => {
    _.keys(obj);
  })
  .add('Object.keys()', () => {
    Object.keys(obj);
  })
  .run();
