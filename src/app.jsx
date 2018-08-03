/* global document */
import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import './css/reset.css';
import './css/base.css';
import App from './components/App/App';
import data from '../data.json';

/* All the redux stuff */

/* --- Reducers --- */
const sourceData = (state = data) => state;

const stage = (state = 'start', action) => {
  switch (action.type) {
    case 'SET_STAGE':
      return action.stage;
    default:
      return state;
  }
};

// const moves = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREASE_MOVES':
//       return state + 1;
//     default:
//       return state;
//   }
// };

const openCards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_OPEN_CARD':
      if (state.length === 2 || state.includes(action.cardId)) {
        return state;
      }
      return state.concat(action.cardId);
    case 'EMPTY_OPEN_CARD':
      return [];
    case 'DEFAULT_OPEN_CARD':
    default:
      return state;
  }
};

const foundCards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FOUND_CARDS':
      return state.concat(action.cards);
    case 'EMPTY_FOUND_CARDS':
      return [];
    default:
      return state;
  }
};

const showFoundCards = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_BIGCARD':
      return true;
    case 'HIDE_BIGCARD':
      return false;
    default:
      return state;
  }
};

const rootReducers = combineReducers({
  sourceData,
  stage,
  openCards,
  foundCards,
  showFoundCards
});
/* ---------------- */

/* --- Store --- */
const store = createStore(rootReducers);
/* ------------- */

/* --- App container --- */

const mapStateToProps = state => state;

const AppContainer = connect(mapStateToProps)(App);

/* --------------------- */

/* ------------------- */

function renderApp() {
  render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('app')
  );
}
renderApp();

if (module.hot) {
  module.hot.accept('./components/App/App', renderApp);
}
