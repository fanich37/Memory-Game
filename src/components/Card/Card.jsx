import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.css';

const Card = ({
  frontCard, isOpen, isFound, onClick
}) => {
  const frontSrc = require(`../../img/small/s_${frontCard}@2x.jpg`);
  const isCardOpen = isOpen ? style.card_open : '';
  const isCardFound = isFound ? style.card_found : '';
  const cardClasses = [style.card, isCardOpen, isCardFound].join(' ');

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions */
    <div className={cardClasses} onClick={onClick}>
      <div className={style.card__back} />
      <div className={style.card__front} style={{ backgroundImage: `url(${frontSrc})` }} />
    </div>
    /* eslint-enable jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions */
  );
};

Card.propTypes = {
  frontCard: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isFound: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
