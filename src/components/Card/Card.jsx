import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.css';

const Card = props => {
  const frontSrc = require(`../../img/small/s_${props.frontCard}@2x.jpg`);
  const isOpen = props.isOpen ? style.card_open : '';
  const isFound = props.isFound ? style.card_found : '';
  const cardClasses = [style.card, isOpen, isFound].join(' ');

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions */
    <div className={cardClasses} onClick={() => props.openCard(Number(props.index))}>
      <div className={style.card__back} />
      <div className={style.card__front} style={{ backgroundImage: `url(${frontSrc})` }} />
    </div>
    /* eslint-enable jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions */
  );
};

Card.propTypes = {
  index: PropTypes.number.isRequired,
  frontCard: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isFound: PropTypes.bool.isRequired,
  openCard: PropTypes.func.isRequired
};

export default Card;
