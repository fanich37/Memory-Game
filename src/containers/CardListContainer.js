import { connect } from 'react-redux';
import CardList from '../components/CardList/CardList';
import { openCard } from '../actionCreators';

const mapStateToProps = state => ({
  cards: state.cards,
  openCards: state.openCards,
  foundCards: state.foundCards
});

const mapDispatchToProps = dispatch => ({
  clickHandler: index => dispatch(openCard(index))
});

const CardListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList);

export default CardListContainer;
