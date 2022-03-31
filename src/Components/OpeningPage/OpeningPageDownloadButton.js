import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons'
import '../../Styles/OpeningPage/OpeningPageButtons.css';

function OpeningPageDownloadButton() {
  return (
    <div className="op-download-btn-container">
        <button className='op-download-btn'>
            <div className='op-download-item'>
                Download Now
            </div>
            <div className='op-download-item'>
              <FontAwesomeIcon icon={faCloudArrowDown}/>
            </div>
        </button>
    </div>
  );
}

export default OpeningPageDownloadButton;
