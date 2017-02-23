import bench from 'parkbench';
import _ from 'lodash';
import {flatten} from '../../lib/array/flatten';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('flatten()', () => {
    flatten([arr, arr, arr, arr]);
  })
  .add('_.concat()', () => {
    _.flatten([arr, arr, arr, arr]);
  })
  .add('Array#reduce(Array#concat())', () => {
    [arr, arr, arr, arr].reduce((p, q) => p.concat(q));
  })
  .run();
