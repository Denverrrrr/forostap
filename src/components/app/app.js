import React from 'react';

import { withService } from "../hoc";

import Header from '../header';
import Featured from '../featured'  ;

import './app.scss';


const App = ({givebatService}) => {
    console.log(givebatService.getFeaturedItems());
    return (
      <main role="main" className="container">
      <Header />
        <Featured />
        <Featured />
      </main>
    );
}

export default withService()(App);
