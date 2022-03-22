import React from 'react';
import '../../../Styles/OpeningPage/OpeningPageStats.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import AnimatedNumber from 'react-animated-number';

function OpeningPageStatsItem({number,label}) {
  return (
    <div className="op-stats-item-container">
        <div className='op-stats-item-content'>
            <div className='op-stats-number'>
                <AnimatedNumber component="text" value={number}
                style={{
                    fontSize: 22,
                }}
                duration={300}
                formatValue={n=>n.toFixed(3).toString().replace(".",",")}
                />

            </div>
            <div className='op-stats-label'>
                {label}
            </div>
        </div>
        <div className='op-stats-item-icon'>
            <FontAwesomeIcon icon={faArrowUp}/>
        </div>
    </div>
  );
}

export default OpeningPageStatsItem;
