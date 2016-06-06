import bench from 'parkbench';
import _ from 'lodash';
import {startsWith} from '../../lib/string/starts-with';

const str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

bench()
  .add('startsWith()', () => {
    startsWith(str, 'Lorem');
  })
  .add('_.startsWith()', () => {
    _.startsWith(str, 'Lorem');
  })
  .add('String#startsWith()', () => {
    str.startsWith('Lorem');
  })
  .run();
