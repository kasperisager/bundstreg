import bench from 'parkbench';
import _ from 'lodash';
import {reverse} from '../../lib/array/reverse';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('reverse()', () => {
    reverse(arr);
  })
  .add('_.reverse()', () => {
    _.reverse(arr.slice());
  })
  .add('Array#reverse()', () => {
    arr.slice().reverse();
  })
  .run();
