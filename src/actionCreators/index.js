import {
  CLOSE_OPEN_CARDS, SET_STAGE, ADD_FOUND_CARD, OPEN_CARD
} from '../constants';

export const closeOpenCards = () => ({ type: CLOSE_OPEN_CARDS });

export const setStage = stage => ({ type: SET_STAGE, stage });

export const addFoundCard = foundCards => ({
  type: ADD_FOUND_CARD,
  foundCards
});

export const openCard = index => (dispatch, getState) => new Promise(resolve => {
  const timer = setTimeout(() => {
    clearTimeout(timer);
    resolve(index);
  }, 0);
}).then(res => {
  dispatch({ type: OPEN_CARD, index: res });
  const state = getState();

  if (state.openCards.length === 2) {
    const firstCardIndex = state.openCards[0];
    const secondCardIndex = state.openCards[1];
    const firstCard = state.cards[firstCardIndex];
    const secondCard = state.cards[secondCardIndex];

    return new Promise(resolve => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        if (firstCard.slug === secondCard.slug) {
          resolve(addFoundCard([firstCardIndex, secondCardIndex]));
        } else {
          resolve(closeOpenCards());
        }
      }, 1000);
    }).then(action => {
      dispatch(action);
    });
  }

  return state;
});
