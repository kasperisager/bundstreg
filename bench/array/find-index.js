import bench from 'parkbench';
import _ from 'lodash';
import {findIndex} from '../../lib/array/find-index';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('findIndex()', () => {
    findIndex(arr, e => e > 9);
  })
  .add('_.findIndex()', () => {
    _.findIndex(arr, e => e > 9);
  })
  .add('Array#findIndex()', () => {
    arr.findIndex(e => e > 9);
  })
  .run();
