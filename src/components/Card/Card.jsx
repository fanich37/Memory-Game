import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.css';

const Card = props => {
  const frontSrc = require(`../../img/small/s_${props.frontCard}@2x.jpg`);
  const isOpen = props.isOpen ? style.card_open : '';
  const isFound = props.isFound ? style.card_found : '';
  const cardClasses = [style.card, isOpen, isFound].join(' ');

  return (
    <div className={cardClasses} onClick={() => props.openCard(Number(props.index))}>
      <div className={style.card__back} />
      <div className={style.card__front} style={{ backgroundImage: `url(${frontSrc})` }} />
    </div>
  );
};

Card.propTypes = {
  frontCard: PropTypes.string,
  isOpen: PropTypes.bool,
  isFound: PropTypes.bool,
  openCard: PropTypes.func
};

export default Card;
