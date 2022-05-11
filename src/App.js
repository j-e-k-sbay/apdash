import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import OpeningPage from './Components/OpeningPage/OpeningPage';
import WhitePage from './Components/WhitePage';
import AttributesTiles from './Components/AttributesTiles/AttributesTiles';
import ApdashHelpToManage from './Components/Sections/ApdashHelpToManage';
import ShareYourPhotos from './Components/Sections/ShareYourPhotos';
import ParallaxComp from './Components/ParallaxComp/ParallaxComp';
import ApdashFeatures from './Components/Sections/ApdashFeatures/ApdashFeatures';

import OurWorkProcess from './Components/Sections/OurWorkProcess/OurWorkProcess';

function App() {

  return (
    <div className="app">
      <Navbar></Navbar>
      <OpeningPage></OpeningPage>
      <AttributesTiles/>
      <ApdashHelpToManage/>
      <ShareYourPhotos/>
      <ParallaxComp/>
      <ApdashFeatures/>

    </div>
  );
}

export default App;
