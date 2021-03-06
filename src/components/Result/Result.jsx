import React from 'react';
import PropTypes from 'prop-types';
import style from './Result.css';
import { pluralize } from '../../helpers';

const Result = ({ moves }) => (
  <div className={style.result}>
    <div className={style.result__inner}>
      <p>
        {`Поздравляем! Вам удалось открыть все карточки за ${pluralize(moves, [
          'ходов',
          'ход',
          'хода'
        ])}.`}
      </p>
    </div>
  </div>
);

Result.propTypes = {
  moves: PropTypes.number.isRequired
};

export default Result;
