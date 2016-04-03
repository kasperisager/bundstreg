import bench from 'parkbench';
import _ from 'lodash';
import each from '../../lib/array/each';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('each()', () => {
    each(arr, (e, i) => e + i);
  })
  .add('_.each()', () => {
    _.each(arr, (e, i) => e + i);
  })
  .add('Array#forEach()', () => {
    arr.forEach((e, i) => e + i);
  })
  .run();
