import bench from 'parkbench';
import _ from 'lodash';
import {assign} from '../../lib/object/assign';

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10};

bench()
  .add('assign()', () => {
    assign({}, obj);
  })
  .add('_.assign()', () => {
    _.assign({}, obj);
  })
  .add('Object.assign()', () => {
    Object.assign({}, obj);
  })
  .run();
