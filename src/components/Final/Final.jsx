import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Result from '../Result/Result';
import ButtonContainer from '../../containers/ButtonContainer';
import { STAGES } from '../../constants';
import style from './Final.css';

const Final = ({ moves, stage }) => {
  const finalClasses = classNames({
    [style.final]: stage === STAGES.FINISHED,
    [style.final_hidden]: stage !== STAGES.FINISHED
  });

  return (
    <div className={finalClasses}>
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
