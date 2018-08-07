import { connect } from 'react-redux';
import Card from '../components/Card/Card';
import { openCard } from '../actionCreators';

const mapStateToProps = (state, ownProps) => ({
  isOpen: state.openCards.includes(ownProps.index),
  isFound: state.foundCards.includes(ownProps.index)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openCard: () => {
    dispatch(openCard(ownProps.index));
  }
});

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);

export default CardContainer;
