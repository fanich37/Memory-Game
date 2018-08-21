import { cloneObj, getCardsForGame, sortArrayRandomly } from '../helpers';
import {
  CLOSE_OPEN_CARDS, SET_STAGE, ADD_FOUND_CARD, OPEN_CARD, STAGES
} from '../constants';
import data from '../../data.json';

const rootReducer = (
  state = {
    stage: STAGES.START,
    moves: 0,
    openCards: [],
    foundCards: [],
    cards: getCardsForGame(data)
  },
  action
) => {
  const newState = cloneObj(state);

  switch (action.type) {
    case SET_STAGE: {
      if (state.stage === STAGES.START) {
        newState.moves = 0;
        newState.openCards = [];
        newState.foundCards = [];
        newState.cards = sortArrayRandomly(state.cards);
      }
      newState.stage = action.stage;
      return newState;
    }

    case OPEN_CARD:
      if (state.openCards.includes(action.index)) {
        return state;
      }
      newState.openCards.push(action.index);
      return newState;

    case CLOSE_OPEN_CARDS:
      newState.moves++;
      newState.openCards = [];
      return newState;

    case ADD_FOUND_CARD:
      newState.stage = STAGES.PAUSED;
      newState.moves++;
      newState.openCards = [];
      newState.foundCards.push(...action.foundCards);
      return newState;

    default:
      return state;
  }
};

export default rootReducer;
