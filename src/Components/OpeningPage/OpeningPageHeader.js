import React from 'react';
import '../../Styles/OpeningPage/OpeningPageTextSide.css';

function OpeningPageHeader({children}) {
  return (
    <div className="op-textside">
      <div className='op-header'>
          {children}
      </div>
    </div>
  );
}

export default OpeningPageHeader;
