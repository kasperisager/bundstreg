import bench from 'parkbench';
import _ from 'lodash';
import {fill} from '../../lib/array/fill';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('fill()', () => {
    fill(arr, 11);
  })
  .add('_.fill()', () => {
    _.fill(arr, 11);
  })
  .add('Array#fill()', () => {
    arr.fill(11);
  })
  .run();
