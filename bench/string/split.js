import bench from 'parkbench';
import _ from 'lodash';
import {split} from '../../lib/string/split';

const str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

bench()
  .add('split()', () => {
    split(str, ' ');
  })
  .add('_.split()', () => {
    _.split(str, ' ');
  })
  .add('String#split()', () => {
    str.split(' ');
  })
  .run();
