import React from 'react';

import Header from '../header';
import Featured from '../featured';

import './app.scss';


const App = () => {
    return (
      <main role='main' className='container'>
        <Header/>
        <Featured/>
      </main>
    );
}

export default App;
