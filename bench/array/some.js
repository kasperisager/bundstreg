import bench from 'parkbench';
import _ from 'lodash';
import some from '../../lib/array/some';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('some()', () => {
    some(arr, e => e === 10);
  })
  .add('_.some()', () => {
    _.some(arr, e => e === 10);
  })
  .add('Array#some()', () => {
    arr.some(e => e === 10);
  })
  .run();
