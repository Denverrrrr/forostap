import React from 'react';

import Header from '../header';
import Featured from '../featured';
import ReferencesBlock from '../references-block';

const HomePage = () => {
  return(
  <div className="home-page-container">
    <Header />
    <Featured heading={"reatured"} />
    <ReferencesBlock />
    <Featured />
  </div>
  )
}

export default HomePage;