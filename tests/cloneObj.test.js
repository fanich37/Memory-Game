import deepFreeze from 'deep-freeze';
import { cloneObj } from '../src/helpers';

const obj = {
  a: 0,
  b: 1,
  c: [0, 1, 2, 3],
  d: {
    a: 0,
    b: [0, 1, 2, 3],
    c: {
      a: 0,
      b: 1,
      c: 2
    }
  }
};

deepFreeze(obj);

describe('Check cloneObj function', () => {
  test('New object is equal', () => {
    expect(cloneObj(obj)).toEqual(obj);
  });
  test('New object is not the same instance', () => {
    expect(cloneObj(obj)).not.toBe(obj);
  });
});
