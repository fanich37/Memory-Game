import React from 'react';
import PropTypes from 'prop-types';
import style from './PicList.css';

const PicList = ({ pics }) => (
  <div className={style.pics}>
    {pics.map(pic => (
      <img key={pic.slug} src={require(`../../img/large/l_${pic.slug}@2x.jpg`)} alt="" />
    ))}
  </div>
);

PicList.propTypes = {
  pics: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PicList;
