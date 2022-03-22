import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import '../../Styles/OpeningPage/OpeningPageButtons.css';

function OpeningPageVideoButton() {
  return (
    <div className="op-video-btn-container">
        <button className='op-video-btn'>
            <div className='op-video-item'>
                <FontAwesomeIcon icon={faPlay}/>
            </div>
        </button>
    </div>
  );
}

export default OpeningPageVideoButton;
