import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import style from './BigCard.css';
import { getAgeFromBirthday, pluralize } from '../../helpers';

const BigCard = ({ card, closeFoundCard }) => {
  const bigCardClasses = [style.bigcard, style.bigcard_shown, style.bigcard_scaled].join(' ');
  const photo = require(`../../img/large/l_${card.id}@2x.jpg`);

  return (
    <div className={bigCardClasses}>
      <article className={style.bigcard__inner}>
        <img src={photo} alt={card.name} className={style.bigcard__img} />
        <header className={style.bigcard__header}>
          <h1 className={[style.bigcard__title, style.bigcard__title_h1].join(' ')}>
            <span>
              {card.name}
              {', '}
            </span>
            <span>{pluralize(getAgeFromBirthday(card.birthday), ['лет', 'год', 'года'])}</span>
          </h1>
          <h2 className={[style.bigcard__title, style.bigcard__title_h2].join(' ')}>
            {card.subtitle}
          </h2>
        </header>
        <section className={style.bigcard__desc}>
          <p>{card.description}</p>
        </section>
        <footer className={style.bigcard__footer}>
          <Button title="Дальше" clickHandler={() => closeFoundCard()}>
            Дальше
          </Button>
        </footer>
      </article>
    </div>
  );
};

BigCard.propTypes = {
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
