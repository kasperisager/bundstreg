import bench from 'parkbench';
import _ from 'lodash';
import toUpper from '../../lib/string/to-upper';

const str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

bench()
  .add('toUpper()', () => {
    toUpper(str);
  })
  .add('_.toUpper()', () => {
    _.toUpper(str);
  })
  .add('String#toUpperCase()', () => {
    str.toUpperCase();
  })
  .run();
