import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import OpeningPage from './Components/OpeningPage/OpeningPage';
import WhitePage from './Components/WhitePage';
import AttributesTiles from './Components/AttributesTiles/AttributesTiles';
function App() {

  return (
    <div className="app">
      <Navbar></Navbar>
      <OpeningPage></OpeningPage>
      <WhitePage>
        <AttributesTiles/>
      </WhitePage>
    </div>
  );
}

export default App;
