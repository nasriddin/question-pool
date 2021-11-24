import React from 'react';
import Navbar from './components/Navbar';
import menuElements from './utils/menuElements'


function App() {
  return (
    <Navbar menus={menuElements} />
  )
}

export default App;
