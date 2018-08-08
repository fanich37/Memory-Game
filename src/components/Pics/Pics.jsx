import React from 'react';
import PropTypes from 'prop-types';
import style from './Pics.css';

const Pics = ({ pics }) => (
  <div className={style.pics}>
    {pics.map(pic => (
      <img key={pic.id} src={require(`../../img/large/l_${pic.id}@2x.jpg`)} alt="" />
    ))}
  </div>
);

Pics.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Pics;
