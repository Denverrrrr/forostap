import React from 'react';

import {Route} from 'react-router-dom';

import {
  HomePage,
  CryptoCompanionsPage,
  ChangelogPage,
  IndizrPage
} from "../pages";

import './app.scss';


const App = () => {
    return (
      <main role="main">
        <Route path="/" component={HomePage} exact />
        <Route path="/crypto-companions" component={CryptoCompanionsPage} />
        <Route path="/changelog" component={ChangelogPage} />
        <Route path="/indizr" component={IndizrPage} />
      </main>
    );
}

export default App;
