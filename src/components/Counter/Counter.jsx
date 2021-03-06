import React from 'react';
import PropTypes from 'prop-types';
import style from './Counter.css';

const Counter = ({ moves }) => (
  <div className={style.counter}>
    <p>
      <span>Ходов: </span>
      <span>{moves}</span>
    </p>
  </div>
);

Counter.propTypes = {
  moves: PropTypes.number.isRequired
};

export default Counter;
