function getRandomNumber(max) {
  return (Math.random() * (max - 1)).toFixed();
}

function getRandomCardsArray(initialArray, numberOfElements) {
  const arr = [];
  let obj = {};
  for (let i = 0; arr.length < numberOfElements; i++) {
    const index = getRandomNumber(numberOfElements);
    if (obj[index]) {
      // eslint-disable-next-line
      continue;
    }
    if (index >= numberOfElements / 2) {
      obj[index] = 1;
      arr.push(initialArray[index - numberOfElements / 2]);
    } else {
      obj[index] = 1;
      arr.push(initialArray[index]);
    }
  }
  obj = null;
  return arr;
}

export { getRandomCardsArray };

function copyState(state) {
  const newState = {};

  Object.keys(state).forEach(property => {
    if (
      typeof state[property] === 'number'
      || typeof state[property] === 'string'
      || typeof state[property] === 'boolean'
    ) {
      newState[property] = state[property];
    }

    if (typeof state[property] === 'object' && state[property].constructor.name === 'Array') {
      newState[property] = Object.assign([], state[property]);
    }

    if (typeof state[property] === 'object' && state[property].constructor.name === 'Object') {
      newState[property] = Object.assign({}, state[property]);
    }
  });

  return newState;
}

export { copyState };

function getAgeFromBirthday(date) {
  const today = new Date(Date.now());
  const dateOfBirth = new Date(date);

  return parseInt((today - dateOfBirth) / 31556926000, 10);
}

export { getAgeFromBirthday };

function getPhraseAccordingToNumber(number, arr) {
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

export { getPhraseAccordingToNumber };
