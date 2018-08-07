import { combineReducers } from 'redux';
// import { INITIAL_STATE } from '../constants';
// import { cloneObj } from '../helpers';

const moves = (state = 0, action) => {
  if (action.type === 'INCREASE_MOVE') {
    return state++;
  }
  return state;
};

const stage = (state = 'start', action) => {
  if (action.type === 'SET_STAGE') {
    return action.stage;
  }
  return state;
};

const openCards = (state = [], action) => {
  switch (action.type) {
    case 'OPEN_CARD':
      console.log(action);
      return state.concat(action.cardId);
    case 'CLOSE_CARDS':
      return [];
    default:
      return state;
  }
};

const foundCards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FOUND_CARD':
      return state.concat(action.foundCards);
    default:
      return state;
  }
};

// const rootReducer = (state = INITIAL_STATE, action) => {
//   const newState = cloneObj(state);

//   switch (action.type) {
//     case 'START_GAME': {
//       newState.stage = 'running';
//       return newState;
//     }
//     case 'INCREASE_MOVES':
//       newState.moves++;
//       return newState;
//     case 'FINISH_GAME': {
//       newState.stage = 'finished';
//       return newState;
//     }
//     case 'OPEN_CARD':
//       if (state.openCards.length === 2 || state.openCards.includes(action.cardId)) {
//         return state;
//       }
//       newState.openCards.push(action.cardId);
//       return newState;
//     case 'EMPTY_OPEN_CARDS':
//       newState.moves++;
//       newState.openCards = [];
//       return newState;
//     case 'ADD_FOUND_CARD':
//       newState.moves++;
//       newState.openCards = [];
//       newState.foundCards.push(action.foundCards[0], action.foundCards[1]);
//       newState.showFoundCard = true;
//       return newState;
//     case 'CLOSE_FOUND_CARD':
//       newState.showFoundCard = false;
//       return newState;
//     case 'START_NEW_GAME':
//       return INITIAL_STATE;
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  moves,
  stage,
  openCards,
  foundCards
});

export default rootReducer;
