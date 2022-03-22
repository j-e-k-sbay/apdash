import React from 'react';
import '../../Styles/OpeningPage/OpeningPageButtons.css';
import OpeningPageDownloadButton from './OpeningPageDownloadButton';
import OpeningPageVideoButton from './OpeningPageVideoButton';
import OpeningPageWatchText from './OpeningPageWatchText';

function OpeningPageButtons() {
  return (
    <div className="op-buttons-container">
        <OpeningPageDownloadButton/>
        <OpeningPageVideoButton/>
        <OpeningPageWatchText/>
    </div>
  );
}

export default OpeningPageButtons;
