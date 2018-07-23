import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import style from './BigCard.css';
import { getAgeFromBirthday, getPhraseAccordingToNumber } from '../../helpers';

const BigCard = props => {
  // if (!props.isShown) return '';

  const bigCardClasses = [style.bigcard, style.bigcard_shown, style.bigcard_scaled].join(' ');
  const photo = require(`../../img/large/l_${props.card.id}@2x.jpg`);
  return (
    <div className={bigCardClasses}>
      <article className={style.bigcard__inner}>
        <img src={photo} alt={props.card.name} className={style.bigcard__img} />
        <header className={style.bigcard__header}>
          <h1 className={[style.bigcard__title, style.bigcard__title_h1].join(' ')}>
            <span>
              {props.card.name}
              {', '}
            </span>
            <span>
              {getPhraseAccordingToNumber(getAgeFromBirthday(props.card.birthday), [
                'лет',
                'год',
                'года'
              ])}
            </span>
          </h1>
          <h2 className={[style.bigcard__title, style.bigcard__title_h2].join(' ')}>
            {props.card.subtitle}
          </h2>
        </header>
        <section className={style.bigcard__desc}>
          <p>{props.card.description}</p>
        </section>
        <footer className={style.bigcard__footer}>
          <Button title="Дальше" clickHandler={props.closeFoundCard} />
        </footer>
      </article>
    </div>
  );
};

BigCard.propTypes = {
  // isShown: PropTypes.bool.isRequired,
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  closeFoundCard: PropTypes.func.isRequired
};

export default BigCard;
