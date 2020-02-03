import React from 'react';

import './featured-items.scss';

const FeaturedItem = ({ item, nameToStyles }) => {

  const { title, description, backgroundImage } = item;

  return (
    <div className={`${nameToStyles}-item-card`}>
      <div
        className={`${nameToStyles}-img-container`}
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      ></div>
      <div className={`${nameToStyles}-item-description`}>
        <span>Collection</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <p className="appearedImgContainer">
        <span role="img" aria-labelledby="laptop emoji" className="appearedImg">
          💸
        </span>
      </p>
    </div>
  );
};

export default FeaturedItem;