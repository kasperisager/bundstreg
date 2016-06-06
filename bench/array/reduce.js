import bench from 'parkbench';
import _ from 'lodash';
import {reduce} from '../../lib/array/reduce';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('reduce()', () => {
    reduce(arr, (acc, e) => acc + e);
  })
  .add('_.reduce()', () => {
    _.reduce(arr, (acc, e) => acc + e);
  })
  .add('Array#reduce()', () => {
    arr.reduce((acc, e) => acc + e);
  })
  .run();
