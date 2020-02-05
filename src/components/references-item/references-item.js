import React from 'react';

import './references-item.scss';

const ReferencesItem = ({item}) => {

  return (
    <div className="references-item">
      <p className="references-img-container">
        <span role="img" className="references-img"></span>
      </p>
      <div className="references-description">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Visit</p>
      </div>
    </div>
  );
};

export default ReferencesItem;