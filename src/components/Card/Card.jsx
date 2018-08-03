import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './Card.css';

const Card = ({
  frontCard, isOpen, isFound, openCard
}) => {
  const frontSrc = require(`../../img/small/s_${frontCard}@2x.jpg`);
  const isCardOpen = isOpen ? style.card_open : '';
  const isCardFound = isFound ? style.card_found : '';
  const cardClasses = [style.card, isCardOpen, isCardFound].join(' ');

  return (
    /* eslint-disable jsx-a11y/click-events-have-key-events,
    jsx-a11y/no-static-element-interactions */
    <div className={cardClasses} onClick={() => openCard()}>
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
  isFound: PropTypes.bool.isRequired
  // openCard: PropTypes.func.isRequired
};

/* --- Card container --- */
const mapStateToProps = (state, ownProps) => ({
  isOpen: state.openCards.includes(ownProps.index),
  isFound: state.foundCards.includes(ownProps.index)
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  openCard: () => {
    dispatch({ type: 'ADD_OPEN_CARD', cardId: ownProps.index });
  }
});

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
/* ---------------------- */

// export default Card;
