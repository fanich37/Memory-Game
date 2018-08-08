import { connect } from 'react-redux';
import Button from '../components/Button/Button';
import { setStage } from '../actionCreators';

const mapStateToProps = state => {
  switch (state.stage) {
    case 'running':
      return { stage: 'paused', title: 'Дальше' };
    case 'paused':
      return {
        stage: state.foundCards.length === state.cards.length ? 'finished' : 'running',
        title: 'Дальше'
      };
    case 'finished':
      return { stage: 'start', title: 'Играть снова' };
    default:
      return { stage: 'running', title: 'Начать игру' };
  }
};

const mapDispatchToProps = dispatch => ({
  onClick: stage => {
    dispatch(setStage(stage));
  }
});

const ButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
