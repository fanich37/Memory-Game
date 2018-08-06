/* global document */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './css/reset.css';
import './css/base.css';
import store from './store';
import AppContainer from './containers/AppContainer';
import data from '../data.json';

function renderApp() {
  render(
    <Provider store={store}>
      <AppContainer sourceData={data} />
    </Provider>,
    document.getElementById('app')
  );
}
renderApp();

if (module.hot) {
  module.hot.accept('./containers/AppContainer', renderApp);
}
