import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import OpeningPage from './Components/OpeningPage/OpeningPage';
import WhitePage from './Components/WhitePage';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <OpeningPage></OpeningPage>
      <WhitePage></WhitePage>
    </div>
  );
}

export default App;
