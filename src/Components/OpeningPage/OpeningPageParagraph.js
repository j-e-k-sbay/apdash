import React from 'react';
import '../../Styles/OpeningPage/OpeningPageTextSide.css';

function OpeningPageParagraph({children}) {
  return (
    <div className="op-textside">
      <div className='op-paragraph'>
          {children}
      </div>
    </div>
  );
}

export default OpeningPageParagraph;
