import React from 'react';
import PropTypes from 'prop-types';
import Result from '../Result/Result';
import ButtonContainer from '../../containers/ButtonContainer';
import style from './Final.css';

const Final = ({ moves, stage }) => {
  const classNames = stage !== 'finished' ? [style.final, style.final_hidden].join(' ') : style.final;

  return (
    <div className={classNames}>
      <Result moves={moves} />
      <ButtonContainer modifier="button_big" />
    </div>
  );
};

Final.propTypes = {
  moves: PropTypes.number.isRequired,
  stage: PropTypes.string.isRequired
};

export default Final;
