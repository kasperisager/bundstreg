import bench from 'parkbench';
import _ from 'lodash';
import join from '../../lib/array/join';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('join()', () => {
    join(arr);
  })
  .add('_.join()', () => {
    _.join(arr);
  })
  .add('Array#join()', () => {
    arr.join();
  })
  .run();
