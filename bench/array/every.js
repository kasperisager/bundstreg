import bench from 'parkbench';
import _ from 'lodash';
import every from '../../lib/array/every';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('every()', () => {
    every(arr, e => e !== 0);
  })
  .add('_.every()', () => {
    _.every(arr, e => e !== 0);
  })
  .add('Array#every()', () => {
    arr.every(e => e !== 0);
  })
  .run();
