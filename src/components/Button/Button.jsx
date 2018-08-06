import React from 'react';
import PropTypes from 'prop-types';
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

export default Button;
