import { pluralize } from '../src/helpers';

test('Get phrase according to the age', () => {
  expect(pluralize(44, ['лет', 'год', 'года'])).toBe('44 года');
});
test('Get phrase according to the age', () => {
  expect(pluralize(81, ['лет', 'год', 'года'])).toBe('81 год');
});
test('Get phrase according to the age', () => {
  expect(pluralize(30, ['лет', 'год', 'года'])).toBe('30 лет');
});
test('Get phrase according to the age', () => {
  expect(pluralize(7865, ['лет', 'год', 'года'])).toBe('7865 лет');
});
test('Get phrase according to the age', () => {
  expect(pluralize(200582, ['лет', 'год', 'года'])).toBe('200582 года');
});
