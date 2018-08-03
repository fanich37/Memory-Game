import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './Button.css';

const Button = ({
  modifier, clickHandler, title, children
}) => {
  const buttonClasses = !modifier ? style.button : [style.button, style[modifier]].join(' ');

  return (
    <button type="button" className={buttonClasses} onClick={clickHandler} title={title}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  modifier: '',
  children: ''
};

Button.propTypes = {
  modifier: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.string
};

/* --- Button Container --- */
const mapDispatchToStore = (dispatch, ownProps) => ({
  clickHandler: () => {
    dispatch({ type: 'SET_STAGE', stage: ownProps.stage });
  }
});

const ButtonContainer = connect(
  null,
  mapDispatchToStore
)(Button);
export default ButtonContainer;
/* ------------------------ */

// export default Button;
