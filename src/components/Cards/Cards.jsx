import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import style from './Cards.css';

const Cards = ({
  cards, clickHandler, openCards, foundCards
}) => (
  <div className={style.cards}>
    {cards.map((card, index) => (
      <Card
        key={index}
        index={index}
        frontCard={card.id}
        onClick={() => clickHandler(index)}
        isOpen={openCards.includes(index)}
        isFound={foundCards.includes(index)}
      />
    ))}
  </div>
);

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Cards;
