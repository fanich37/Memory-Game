/* global document */
import React from 'react';
import { render } from 'react-dom';
import '../css/reset.css';
import '../css/base.css';
import App from './App/App';

function renderApp() {
  render(<App />, document.getElementById('app'));
}
renderApp();

if (module.hot) {
  module.hot.accept('./App/App', renderApp);
}
