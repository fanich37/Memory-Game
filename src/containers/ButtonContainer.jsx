import { connect } from 'react-redux';
import Button from '../components/Button/Button';

const mapDispatchToProps = (dispatch, ownProps) => ({
  clickHandler: () => {
    dispatch(someAction({ type: ownProps.type }));
  }
});
