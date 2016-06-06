import bench from 'parkbench';
import _ from 'lodash';
import {replace} from '../../lib/string/replace';

const str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

bench()
  .add('replace()', () => {
    replace(str, 'elit', 'elin');
  })
  .add('_.replace()', () => {
    _.replace(str, 'elit', 'elin');
  })
  .add('String#replace()', () => {
    str.replace('elit', 'elin');
  })
  .run();
