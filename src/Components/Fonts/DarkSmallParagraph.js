import React from 'react';
import '../../Styles/Fonts/DarkSmallParagraph.css';

function DarkSmallParagraph({children,isCentered}) {
  return (
    <div className="dark-small-paragraph-container">
      <div className='dark-small-paragraph-content'>
          {children}
      </div>
    </div>
  );
}

export default DarkSmallParagraph;
