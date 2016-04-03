import bench from 'parkbench';
import _ from 'lodash';
import toLower from '../../lib/string/to-lower';

const str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

bench()
  .add('toLower()', () => {
    toLower(str);
  })
  .add('_.toLower()', () => {
    _.toLower(str);
  })
  .add('String#toLowerCase()', () => {
    str.toLowerCase();
  })
  .run();
