function getRandomNumber(max) {
	return (Math.random() * (max - 1)).toFixed();
}

function getRandomCardsArray(initialArray, numberOfElements) {
	const arr = [];
	let obj = {};
	for (let i = 0; arr.length < numberOfElements; i++) {
		const index = getRandomNumber(numberOfElements);
		if (obj[index]) {
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
	let newState = {};
	for (const property in state) {
		if (
			typeof state[property] === 'number' ||
			typeof state[property] === 'string' ||
			typeof state[property] === 'boolean'
		) {
			newState[property] = state[property];
			continue;
		}
		if (typeof state[property] === 'object' && state[property].constructor.name === 'Array') {
			newState[property] = Object.assign([], state[property]);
			continue;
		}
		if (typeof state[property] === 'object' && state[property].constructor.name === 'Object') {
			newState[property] = Object.assign({}, state[property]);
			continue;
		}
	}
	return newState;
}

export { copyState };

function getAgeFromBirthday(date) {
	const today = new Date(Date.now());
	const dateOfBirth = new Date(date);

	return parseInt((today - dateOfBirth) / 31556926000);
}

export { getAgeFromBirthday };

function getPhraseAccordingToNumber(number, arr) {
	const lastChar = Number(`${number}`.charAt(`${number}`.length - 1));
	if (lastChar === 0 || (lastChar >= 5 && lastChar <= 20)) {
		return `${number} ${arr[0]}`;
	}
	if (lastChar === 1) {
		return `${number} ${arr[1]}`;
	}
	if (lastChar >= 2 || lastChar <= 4) {
		return `${number} ${arr[2]}`;
	}
}

export { getPhraseAccordingToNumber };
