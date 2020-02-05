import React from 'react';

import { withService } from "../hoc";

import Header from '../header';
import Featured from '../featured';
import ReferencesBlock from '../references-block';

import './app.scss';


const App = ({givebatService}) => {
    console.log(givebatService.getFeaturedItems());
    return (
      <main role="main" className="container">
        {/* <div className='wrapper'> */}
          <Header />
          <Featured />
        {/* </div> */}
        <div className="references-block-wrapper">
          <ReferencesBlock />
        </div>
          <Featured />
      </main>
    );
}

export default withService()(App);
