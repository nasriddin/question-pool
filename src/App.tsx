import React from 'react';
import Navbar from './components/Navbar';
import CardWrapper from './components/CardWrapper';

import menuElements from './utils/menuElements'


function App() {
  return (
    <>
    <Navbar menus={menuElements} />
    
    </>
  )
}

export default App;
