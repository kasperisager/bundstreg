import bench from 'parkbench';
import _ from 'lodash';
import values from '../../lib/object/values';

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10};

bench()
  .add('values()', () => {
    values(obj);
  })
  .add('_.values()', () => {
    _.values(obj);
  })
  .add('Object.values()', () => {
    Object.values(obj);
  })
  .run();
