import bench from 'parkbench';
import _ from 'lodash';
import concat from '../../lib/array/concat';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('concat()', () => {
    concat(arr, arr, arr, arr);
  })
  .add('_.concat()', () => {
    _.concat(arr, arr, arr, arr);
  })
  .add('Array#concat()', () => {
    arr.concat(arr, arr, arr);
  })
  .run();
