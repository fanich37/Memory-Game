import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import style from './CardList.css';

const CardList = ({
  cards, clickHandler, openCards, foundCards
}) => (
  <div className={style.cardlist}>
    {cards.map((card, index) => (
      <Card
        key={card.key}
        index={index}
        frontCard={card.src}
        onClick={() => clickHandler(index)}
        isOpen={openCards.includes(index)}
        isFound={foundCards.includes(index)}
      />
    ))}
  </div>
);

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  openCards: PropTypes.arrayOf(PropTypes.number).isRequired,
  foundCards: PropTypes.arrayOf(PropTypes.number).isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default CardList;
