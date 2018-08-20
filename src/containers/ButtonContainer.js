import { connect } from 'react-redux';
import Button from '../components/Button/Button';
import { setStage } from '../actionCreators';
import { STAGES, BUTTON_TITLES } from '../constants';

const mapStateToProps = state => {
  switch (state.stage) {
    case STAGES.RUNNING:
      return { stage: STAGES.PAUSED, title: BUTTON_TITLES.NEXT };
    case STAGES.PAUSED:
      return {
        stage: state.foundCards.length === state.cards.length ? STAGES.FINISHED : STAGES.RUNNING,
        title: BUTTON_TITLES.NEXT
      };
    case STAGES.FINISHED:
      return { stage: STAGES.START, title: BUTTON_TITLES.PLAY_AGAIN };
    default:
      return { stage: STAGES.RUNNING, title: BUTTON_TITLES.NEW_GAME };
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
