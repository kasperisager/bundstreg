import bench from 'parkbench';
import _ from 'lodash';
import find from '../../lib/array/find';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('find()', () => {
    find(arr, e => e > 9);
  })
  .add('_.find()', () => {
    _.find(arr, e => e > 9);
  })
  .add('Array#find()', () => {
    arr.find(e => e > 9);
  })
  .run();
