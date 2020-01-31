import React from 'react';

import './featured-item.scss'

const SmallFeaturedItem = () => {
  return (
    <div className="item-card">
      <div className='img-container'>
        {/* <img
          src="https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg"
          alt="img"
        /> */}
      </div>
      <div className="item-description">
        <h3>Lorem, ipsum.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default SmallFeaturedItem;