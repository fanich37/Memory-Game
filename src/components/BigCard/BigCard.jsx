import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import style from './BigCard.css';
import { getAgeFromBirthday, getPhraseAccordingToNumber } from '../../helpers';

const BigCard = props => {
  if (!props.isShown) return '';

  const bigCardClasses = [style.bigcard, style.bigcard_shown, style.bigcard_scaled].join(' ');
  const photo = require(`../../img/large/l_${props.id}@2x.jpg`);
  return (
    <div className={bigCardClasses}>
      <article className={style.bigcard__inner}>
        <img src={photo} alt={props.name} className={style.bigcard__img} />
        <header className={style.bigcard__header}>
          <h1 className={[style.bigcard__title, style.bigcard__title_h1].join(' ')}>
            <span>{props.name}, </span>
            <span>{getPhraseAccordingToNumber(getAgeFromBirthday(props.age), ['лет', 'год', 'года'])}</span>
          </h1>
          <h2 className={[style.bigcard__title, style.bigcard__title_h2].join(' ')}>{props.subtitle}</h2>
        </header>
        <section className={style.bigcard__desc}>
          <p>{props.description}</p>
        </section>
        <footer className={style.bigcard__footer}>
          <Button title={'Дальше'} clickHandler={props.closeFoundCard} />
        </footer>
      </article>
    </div>
  );
};

BigCard.propTypes = {
  isShown: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  closeFoundCard: PropTypes.func
};

export default BigCard;
