import bench from 'parkbench';
import _ from 'lodash';
import {partition} from '../../lib/array/partition';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('partition()', () => {
    partition(arr, e => e % 2 === 0);
  })
  .add('_.partition()', () => {
    _.partition(arr, e => e % 2 === 0);
  })
  .add('Array#reduce()', () => {
    arr.reduce((p, e) => {
      p[e % 2 === 0 ? 0 : 1].push(e);
      return p;
    }, [[], []]);
  })
  .run();
