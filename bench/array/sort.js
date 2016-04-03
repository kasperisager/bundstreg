import bench from 'parkbench';
import _ from 'lodash';
import sort from '../../lib/array/sort';
import {random, sorted, reversed} from '../../test/helpers/generate-array';
import names from '../fixtures/names.json';

const arr1 = random(100, Number);
const arr2 = sorted(100, Number);
const arr3 = reversed(100, Number);

bench()
  .add('sort()', () => {
    sort(arr1);
  })
  .add('_.sortBy()', () => {
    _.sortBy(arr1);
  })
  .add('Array#sort()', () => {
    arr1.slice().sort();
  })
  .run();

bench()
  .add('sort()', () => {
    sort(arr2);
  })
  .add('_.sortBy()', () => {
    _.sortBy(arr2);
  })
  .add('Array#sort()', () => {
    arr2.slice().sort();
  })
  .run();

bench()
  .add('sort()', () => {
    sort(arr3);
  })
  .add('_.sortBy()', () => {
    _.sortBy(arr3);
  })
  .add('Array#sort()', () => {
    arr3.slice().sort();
  })
  .run();

bench()
  .add('sort()', () => {
    sort(names);
  })
  .add('_.sortBy()', () => {
    _.sortBy(names);
  })
  .add('Array#sort()', () => {
    names.slice().sort();
  })
  .run();
