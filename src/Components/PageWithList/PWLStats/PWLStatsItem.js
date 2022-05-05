import React,{ useEffect, useRef, useState } from 'react';
import '../../../Styles/PageWithList/PWLStats.css';
import AnimatedNumber from 'react-animated-number';
import TrackVisibility from 'react-on-screen';

function PWLStatsItem({number,label}) {
  
  return (
    
    <div className="pwl-stats-item-container">
            <div className='pwl-stats-number'>
              <TrackVisibility>
              {({ isVisible }) => isVisible ? 
              <AnimatedNumber component="text" value={number}
              style={{
                  fontSize: 22,
              }}
              duration={300}
              formatValue={n=>n.toFixed(0).toString().replace(".",",")}
              />:
              0
              }
              
              </TrackVisibility>
            </div>
            <div className='pwl-stats-label'>
                {label}
            </div>
    </div>
  );
}

export default PWLStatsItem;
