import arrayIncludes from '../array/includes';
import stringIncludes from '../string/includes';

export default function includes(value, query, position) {
  if (typeof value === 'string') {
    return stringIncludes(value, query, position);
  }

  return arrayIncludes(value, query, position);
}
