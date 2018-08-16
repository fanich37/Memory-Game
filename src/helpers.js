import shortId from 'shortid';
import { YEAR } from './constants';

function getRandomNumber(max) {
  return (Math.random() * (max - 1)).toFixed();
}

// function doubleArray(array) {
//   return array.map(item => [item, item]).reduce((prev, curr) => prev.concat(curr), []);
// }

// function sortArrayRandomly(array) {
//   return array.sort(() => 0.5 - Math.random()).sort(() => 0.5 - Math.random());
// }

// function prepareCards(array) {
//   return array.map(item => {
//     item.src = require(`./img/small/s_${item.slug}@2x.jpg`);
//     return item;
//   });
// }

// console.log(sortArrayRandomly(doubleArray([1, 2, 3, 4, 5, 6, 7, 8])));
// console.log(sortArrayRandomly(doubleArray([1, 2, 3, 4, 5, 6, 7, 8])));
// console.log(sortArrayRandomly(doubleArray([1, 2, 3, 4, 5, 6, 7, 8])));
// console.log(sortArrayRandomly(doubleArray([1, 2, 3, 4, 5, 6, 7, 8])));
// console.log(sortArrayRandomly(doubleArray([1, 2, 3, 4, 5, 6, 7, 8])));

export function getRandomCardsArray(initialArray, numberOfElements) {
  const output = [];
  const cache = {};
  for (let i = 0; output.length < numberOfElements; i++) {
    const index = getRandomNumber(numberOfElements);
    if (cache[index]) {
      // eslint-disable-next-line
      continue;
    }
    if (index >= numberOfElements / 2) {
      cache[index] = 1;
      output.push(initialArray[index - numberOfElements / 2]);
      output[output.length - 1].uniqueId = shortId.generate();
      output[output.length - 1].src = require(`./img/small/s_${
        output[output.length - 1].slug
      }@2x.jpg`);
    } else {
      cache[index] = 1;
      output.push(initialArray[index]);
      output[output.length - 1].uniqueId = shortId.generate();
      output[output.length - 1].src = require(`./img/small/s_${
        output[output.length - 1].slug
      }@2x.jpg`);
    }
  }
  return output;
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
