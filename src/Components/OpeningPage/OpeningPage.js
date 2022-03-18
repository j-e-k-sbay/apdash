import React from 'react';
import '../../Styles/OpeningPage/OpeningPage.css';
import OpeningPageTextSide from './OpeningPageTextSide';
import OpeningPageImageSide from './OpeningPageImageSide';

function OpeningPage() {
  return (
    <div className="opening-page-container">
      <div className='opening-page-content'>
          <OpeningPageTextSide/>
          <OpeningPageImageSide/>
      </div>
    </div>
  );
}

export default OpeningPage;
