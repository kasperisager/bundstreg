import bench from 'parkbench';
import _ from 'lodash';
import {filter} from '../../lib/array/filter';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('filter()', () => {
    filter(arr, e => e % 2 === 0);
  })
  .add('_.filter()', () => {
    _.filter(arr, e => e % 2 === 0);
  })
  .add('Array#filter()', () => {
    arr.filter(e => e % 2 === 0);
  })
  .run();
