import React from 'react';

import './small-featured-item.scss'

const SmallFeaturedItem = () => {


  return (
    <div className="small-item-card">
      <div
        className="small-img-container"
        style={{
          backgroundImage:
            "url(https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg)"
        }}
      ></div>
      <div className="small-item-description">
        <h3>Lorem, ipsum.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default SmallFeaturedItem;