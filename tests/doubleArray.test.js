import { doubleArray } from '../src/helpers';

const testArray = [{ a: 1, b: 2 }, { a: 2, c: 3 }, { g: 4, f: 5 }];

test('New array contains the doubled value of initial array', () => {
  expect(doubleArray(testArray)).toEqual([
    { a: 1, b: 2 },
    { a: 1, b: 2 },
    { a: 2, c: 3 },
    { a: 2, c: 3 },
    { g: 4, f: 5 },
    { g: 4, f: 5 }
  ]);
});
