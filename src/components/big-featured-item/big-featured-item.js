import React from "react";

import "./big-featured-item.scss";

const BigFeaturedItem = ({item}) => {
  
  return (
    <div className="big-item-card">
      <div
        className="big-img-container"
        style={{
          backgroundImage:
            "url(https://www.sciencealert.com/images/2019-12/processed/CatsHaveFacialExpressionsButHardToRead_600.jpg)"
        }} 
      ></div>
      <div className="big-item-description">
        <span>Collection</span>
        <h3>Lorem, ipsum.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default BigFeaturedItem;
