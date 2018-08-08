export const openCard = index => ({ type: 'OPEN_CARD', index });

export const closeOpenCards = () => ({ type: 'CLOSE_OPEN_CARDS' });

export const setStage = stage => ({ type: 'SET_STAGE', stage });

export const addFoundCard = foundCards => ({
  type: 'ADD_FOUND_CARD',
  foundCards: [foundCards[0], foundCards[1]]
});
