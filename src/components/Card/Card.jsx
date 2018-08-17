import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Card.css';

const Card = ({
  frontCard, isOpen, isFound, onClick
}) => {
  const cardClasses = classNames({
    [style.card]: true,
    [style.card_open]: isOpen,
    [style.card_found]: isFound
  });

  return (
    <button type="button" className={cardClasses} onClick={onClick}>
      <span className={style.card__back} />
      <span className={style.card__front} style={{ backgroundImage: `url(${frontCard})` }} />
    </button>
  );
};

Card.propTypes = {
  frontCard: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isFound: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Card;
