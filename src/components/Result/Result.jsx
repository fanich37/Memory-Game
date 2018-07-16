import React from 'react';
import style from './Result.css';
import { getPhraseAccordingToNumber } from '../../helpers';

const Result = props => (
	<div className={style.result}>
		<div className={style.result__inner}>
			<p>{`Поздравляем! Вам удалось открыть все карточки за ${getPhraseAccordingToNumber(props.moves, [
				'ходов',
				'ход',
				'хода'
			])}.`}</p>
		</div>
	</div>
);

export default Result;
