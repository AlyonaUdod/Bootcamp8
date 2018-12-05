'use sctrict'

// import React from 'react';

// лучше писать компоненты стрелочными функциями. Быстрее будет работать.
// .jsx - расширение для работы в реакте.

import React from 'react';
import Header from './header/Header.jsx'
import Main from './main/Main.jsx'

import './App.css';

const App = () => {
  return ( // всегда должен ретернить 1 html блок
    <div>
      <Header/>
      <Main/> 
    </div>
  );
};

export default App;