import bench from 'parkbench';
import _ from 'lodash';
import endsWith from '../../lib/string/ends-with';

const str = 'Lorem ipsum dolor sit amet consectetur adipiscing elit';

bench()
  .add('endsWith()', () => {
    endsWith(str, 'elit');
  })
  .add('_.endsWith()', () => {
    _.endsWith(str, 'elit');
  })
  .add('String#endsWith()', () => {
    str.endsWith('elit');
  })
  .run();
