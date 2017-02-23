import bench from 'parkbench';
import _ from 'lodash';
import {flatMap} from '../../lib/array/flat-map';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('flatMap()', () => {
    flatMap(arr, e => [e, e, e]);
  })
  .add('_.flatMap()', () => {
    _.flatMap(arr, e => [e, e, e]);
  })
  .add('Array#reduce(Array#concat())', () => {
    arr.reduce((a, e) => a.concat([e, e, e]), []);
  })
  .run();
