import bench from 'parkbench';
import _ from 'lodash';
import contains from '../../lib/string/contains';

const str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

bench()
  .add('contains()', () => {
    contains(str, 'elit');
  })
  .add('_.includes()', () => {
    _.includes(str, 'elit');
  })
  .add('String#includes()', () => {
    str.includes('elit');
  })
  .run();
