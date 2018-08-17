import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonContainer from '../../containers/ButtonContainer';
import style from './BigCard.css';
import { getAgeFromBirthday, pluralize } from '../../helpers';
import { STAGES } from '../../constants';

const BigCard = ({ card, stage }) => {
  const bigCardClasses = classNames({
    [style.bigcard]: true,
    [style.bigcard_shown]: stage === STAGES.PAUSED,
    [style.bigcard_scaled]: stage === STAGES.PAUSED
  });
  const photo = require(`../../img/large/l_${card.slug}@2x.jpg`);

  return (
    <div className={bigCardClasses}>
      <article className={style.bigcard__inner}>
        <figure className={style.bigcard__figure}>
          <img src={photo} alt={card.name} className={style.bigcard__img} />
        </figure>
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
          <ButtonContainer />
        </footer>
      </article>
    </div>
  );
};

BigCard.propTypes = {
  card: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  stage: PropTypes.string.isRequired
};

export default BigCard;
