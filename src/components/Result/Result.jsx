import React from 'react';
import './Result.css';
import { getPhraseAccordingToNumber } from '../../helpers';

const Result = props => (
	<div className="result" style={{ backgroundImage: `url(${require('../../img/result-bg.png')})` }}>
		<div className="result__inner">
			<p>{`Поздравляем! Вам удалось открыть все карточки за ${getPhraseAccordingToNumber(props.moves, [
				'ходов',
				'ход',
				'хода'
			])}.`}</p>
		</div>
	</div>
);

export default Result;
