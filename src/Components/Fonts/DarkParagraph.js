import React from 'react';
import '../../Styles/Fonts/DarkParagraph.css';

function DarkParagraph({children,isCentered}) {
  return (
    <div className="dark-paragraph-container">
      <div className='dark-paragraph-content'>
          {children}
      </div>
    </div>
  );
}

export default DarkParagraph;
