import React from 'react';

import './references-item.scss';

const ReferencesItem = ({item}) => {

  const {title, description, backgroundImage,link} = item;

  return (
    <a href={link} target="blank">
      <div className="references-item">
        <p className="references-img-container">
          <span
            role="img"
            className="references-img"
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}
          ></span>
        </p>
        <div className="references-description">
          <div className="text-container">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="to-visit">
            <p>Visit</p>
            <span role="img" className="to-visit-img"></span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ReferencesItem;