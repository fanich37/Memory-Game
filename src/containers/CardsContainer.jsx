import { connect } from 'react-redux';
import Cards from '../components/Cards/Cards';
import { openCard } from '../actionCreators';

const mapStateToProps = state => ({
  openCards: state.openCards,
  foundCards: state.foundCards
});

const mapDispatchToProps = dispatch => ({
  clickHandler: index => dispatch(openCard(index))
});

const CardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cards);

export default CardsContainer;
