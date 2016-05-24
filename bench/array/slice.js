import bench from 'parkbench';
import _ from 'lodash';
import slice from '../../lib/array/slice';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('slice()', () => {
    slice(arr);
  })
  .add('_.slice()', () => {
    _.slice(arr);
  })
  .add('Array#slice()', () => {
    arr.slice();
  })
  .run();
