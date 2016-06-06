import bench from 'parkbench';
import _ from 'lodash';
import {trim} from '../../lib/string/trim';

const str = '        Lorem ipsum dolor sit amet consectetur adipiscing elit               ';

bench()
  .add('trim()', () => {
    trim(str);
  })
  .add('_.trim()', () => {
    _.trim(str);
  })
  .add('String#trim()', () => {
    str.trim();
  })
  .run();
