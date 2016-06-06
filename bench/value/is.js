import bench from 'parkbench';
import _ from 'lodash';
import {is} from '../../lib/value/is';

bench()
  .add('is()', () => {
    is(NaN, NaN);
  })
  .add('_.eq()', () => {
    _.eq(NaN, NaN);
  })
  .add('Object.is()', () => {
    Object.is(NaN, NaN);
  })
  .run();
