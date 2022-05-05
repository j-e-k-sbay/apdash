import React from 'react';
import '../../Styles/Fonts/WhiteParagraph.css';

function WhiteParagraph({children}) {
  return (
    <div className="white-paragraph-container">
      <div className='white-paragraph-content'>
          {children}
      </div>
    </div>
  );
}

export default WhiteParagraph;
