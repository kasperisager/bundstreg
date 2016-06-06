import bench from 'parkbench';
import _ from 'lodash';
import {entries} from '../../lib/object/entries';

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10};

bench()
  .add('entries()', () => {
    entries(obj);
  })
  .add('_.entries()', () => {
    _.entries(obj);
  })
  .add('Object.entries()', () => {
    Object.entries(obj);
  })
  .run();
