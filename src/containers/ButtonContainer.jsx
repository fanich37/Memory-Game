import { connect } from 'react-redux';
import Button from '../components/Button/Button';
import { setStage } from '../actionCreators';

const mapDispatchToProps = (dispatch, ownProps) => ({
  clickHandler: () => {
    dispatch(setStage(ownProps.stage));
  }
});

const ButtonContainer = connect(
  null,
  mapDispatchToProps
)(Button);

export default ButtonContainer;
