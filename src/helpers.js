import shortId from 'shortid';
import { YEAR } from './constants';

export function doubleArray(array) {
  return array.map(item => [item, item]).reduce((prev, curr) => prev.concat(curr), []);
}

function setKeys(array) {
  return array.map(item => Object.assign({}, item, { key: shortId.generate() }));
}

function getPhotoFromCardId(array) {
  return array.map(item => Object.assign({}, item, { src: require(`./img/small/s_${item.slug}@2x.jpg`) }));
}

export function sortArrayRandomly(array) {
  return array.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random());
}

export function getCardsForGame(initialData) {
  return setKeys(doubleArray(getPhotoFromCardId(initialData)));
}

export function cloneObj(obj) {
  const newObj = obj.constructor();

  Object.keys(obj).forEach(property => {
    if (typeof obj[property] !== 'object' || obj[property] === null) {
      newObj[property] = obj[property];
    } else {
      newObj[property] = cloneObj(obj[property]);
    }
  });

  return newObj;
}

export function getAgeFromBirthday(date) {
  const today = new Date(Date.now());
  const dateOfBirth = new Date(date);

  return parseInt((today - dateOfBirth) / YEAR, 10);
}

export function pluralize(num, words) {
  if (
    num === 0
    || !(num % 10)
    || (num >= 5 && num <= 20)
    || num % 10 >= 5
    || (num % 100 >= 5 && num % 100 <= 20)
  ) {
    return `${num} ${words[0]}`;
  }

  if (num === 1 || (num > 20 && num % 10 === 1)) {
    return `${num} ${words[1]}`;
  }

  return `${num} ${words[2]}`;
}
