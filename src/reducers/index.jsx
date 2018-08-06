import { INITIAL_STATE } from '../constants';
import { cloneObj } from '../helpers';

const rootReducer = (state = INITIAL_STATE, action) => {
  const newState = cloneObj(state);

  switch (action.type) {
    case 'START_GAME': {
      newState.stage = 'running';
      return newState;
    }
    case 'FINISH_GAME': {
      newState.stage = 'finished';
      return newState;
    }
    case 'OPEN_CARD':
      if (state.openCards.length === 2 || state.openCards.includes(action.cardId)) {
        return state;
      }
      newState.openCards.push(action.cardId);
      return newState;
    case 'EMPTY_OPEN_CARDS':
      newState.openCards = [];
      newState.moves++;
      return newState;
    case 'ADD_FOUND_CARD':
      newState.moves++;
      newState.openCards = [];
      newState.foundCards.push(action.foundCards[0], action.foundCards[1]);
      newState.showFoundCard = true;
      return newState;
    case 'CLOSE_FOUND_CARD':
      newState.showFoundCard = false;
      return newState;
    case 'START_NEW_GAME':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default rootReducer;
