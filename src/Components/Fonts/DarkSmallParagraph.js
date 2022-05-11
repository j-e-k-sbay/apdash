import React from 'react';
import '../../Styles/Fonts/DarkSmallParagraph.css';

function DarkSmallParagraph({children,right}) {
  return (
    <div className={right ? "dark-small-paragraph-container dsp-right" : "dark-small-paragraph-container"}>
      <div className='dark-small-paragraph-content'>
          {children}
      </div>
    </div>
  );
}

export default DarkSmallParagraph;
