import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.css';

const Button = ({
  modifier, onClick, title, stage
}) => {
  const buttonClasses = !modifier ? style.button : [style.button, style[modifier]].join(' ');

  return (
    <button type="button" className={buttonClasses} onClick={() => onClick(stage)} title={title}>
      {title}
    </button>
  );
};

Button.defaultProps = {
  modifier: ''
};

Button.propTypes = {
  modifier: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  stage: PropTypes.string.isRequired
};

export default Button;
