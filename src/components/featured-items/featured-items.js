import React from 'react';

import './featured-items.scss';
import { Link } from 'react-router-dom';

const FeaturedItem = ({ item, nameToStyles }) => {

  const { title, description, backgroundImage, ariaLabelledby, emoji } = item;

  const link = title.toLowerCase().split(' ').join('-');
  
  return (
    <Link to={`/${link}`} className="rout-link">
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
          <span
            role="img"
            aria-labelledby={ariaLabelledby}
            className="appearedImg"
          >
            {emoji}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default FeaturedItem;