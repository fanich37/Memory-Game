import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.css';

const Button = props => {
  const buttonClasses = !props.modifier
    ? style.button
    : [style.button, style[props.modifier]].join(' ');

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={props.clickHandler}
      title={props.title}
    >
      {props.title}
    </button>
  );
};

Button.defaultProps = {
  modifier: ''
};

Button.propTypes = {
  modifier: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Button;
