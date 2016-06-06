import bench from 'parkbench';
import _ from 'lodash';
import {map} from '../../lib/array/map';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

bench()
  .add('map()', () => {
    map(arr, e => e * 2);
  })
  .add('_.map()', () => {
    _.map(arr, e => e * 2);
  })
  .add('Array#map()', () => {
    arr.map(e => e * 2);
  })
  .run();
