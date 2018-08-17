import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './Button.css';

const Button = ({
  modifier, onClick, title, stage
}) => {
  const buttonClasses = classNames({
    [style.button]: true,
    [style[modifier]]: modifier
  });

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
