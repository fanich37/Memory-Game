/* global document */
import React from 'react';
import { render } from 'react-dom';
import '../css/reset.css';
import '../css/base.css';
import App from './App/App';
import data from '../../data.json';

function renderApp() {
  render(<App data={data} />, document.getElementById('app'));
}
renderApp();

if (module.hot) {
  module.hot.accept('./App/App', renderApp);
}
