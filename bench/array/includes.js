import bench from 'parkbench';
import _ from 'lodash';
import {includes} from '../../lib/array/includes';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('includes()', () => {
    includes(arr, 10);
  })
  .add('_.includes()', () => {
    _.includes(arr, 10);
  })
  .add('Array#includes()', () => {
    arr.includes(10);
  })
  .run();
