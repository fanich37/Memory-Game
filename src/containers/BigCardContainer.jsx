import { connect } from 'react-redux';
import BigCard from '../components/BigCard/BigCard';

const mapStateToProps = state => {
  const foundCardIndex = state.foundCards.length
    ? state.foundCards[state.foundCards.length - 1]
    : 0;

  return {
    stage: state.stage,
    card: state.cards[foundCardIndex]
  };
};

const BigCardContainer = connect(mapStateToProps)(BigCard);

export default BigCardContainer;
