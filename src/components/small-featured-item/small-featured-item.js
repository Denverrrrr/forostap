import React from 'react';

import './small-featured-item.scss'

const SmallFeaturedItem = ({ item, nameToStyles }) => {
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SmallFeaturedItem;