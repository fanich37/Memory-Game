import { getAgeFromBirthday } from '../src/helpers';

test('Get the age from the birthday', () => {
  expect(getAgeFromBirthday('1985-09-02')).toBe(32);
});
test('Get the age from the birthday', () => {
  expect(getAgeFromBirthday('1985-01-31')).toBe(33);
});
test('Get the age from the birthday', () => {
  expect(getAgeFromBirthday('1985-08-02')).toBe(33);
});
test('Get the age from the birthday', () => {
  expect(getAgeFromBirthday('1900-01-01')).toBe(118);
});
test('Get the age from the birthday', () => {
  expect(getAgeFromBirthday('1970-05-18')).toBe(48);
});
