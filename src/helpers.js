import { YEAR } from './constants/app';

function getRandomNumber(max) {
  return (Math.random() * (max - 1)).toFixed();
}

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
    } else {
      cache[index] = 1;
      output.push(initialArray[index]);
    }
  }
  return output;
}

export function cloneObj(obj) {
  const newObj = obj.constructor();

  Object.keys(obj).forEach(property => {
    if (typeof obj[property] !== 'object') {
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

export function getPhraseAccordingToNumber(number, arr) {
  if (number >= 5 && number <= 20) {
    return `${number} ${arr[0]}`;
  }

  const lastChar = Number(`${number}`.charAt(`${number}`.length - 1));

  if (lastChar === 0 || lastChar >= 5) {
    return `${number} ${arr[0]}`;
  }

  if (lastChar === 1) {
    return `${number} ${arr[1]}`;
  }

  return `${number} ${arr[2]}`;
}
