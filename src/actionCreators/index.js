export const openCard = index => dispatch => new Promise(resolve => setTimeout(() => {
  resolve(true);
}, 500))
  .then(() => {
    dispatch({ type: 'OPEN_CARD', cardId: index });
  })
  .then(() => {
    // dispatch({ type: 'INCREASE_MOVES' });
  });

export const setStage = stage => ({ type: 'SET_STAGE', stage });
