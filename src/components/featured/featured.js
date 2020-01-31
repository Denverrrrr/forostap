import React from 'react';
import SmallFeaturedItem from '../small-featured-item';
import BigFeaturedItem from '../big-featured-item';

import './featured.scss'

const Featured = ({featuredNews}) => {
  return (
    <div className='featured-container' >
      <span className="title">Featured</span>
      <div className="small-items-wrapper">
        <SmallFeaturedItem />
        <SmallFeaturedItem />
      </div>
        <BigFeaturedItem />
    </div>
  );
};

export default Featured;