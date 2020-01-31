import React, {Fragment} from 'react';
import {SmallFeaturedItem} from '../featured-items';

import './featured.scss'

const Featured = ({featuredNews}) => {
  return (
    <div className='featured-container'>
      <span className="title">Featured</span>
      <div className="items-grid">
        <SmallFeaturedItem />
        <SmallFeaturedItem />
        {/* <BigFeaturedItem /> */}
      </div>
    </div>
  );
};

export default Featured;