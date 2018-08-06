import data from '../../data.json';

export const YEAR = 31556926000;

export const INITIAL_STATE = {
  sourceData: data,
  stage: 'start',
  openCards: [],
  foundCards: [],
  showFoundCard: false
};
