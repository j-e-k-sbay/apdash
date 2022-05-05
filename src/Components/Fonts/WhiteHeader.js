import React from 'react';
import '../../Styles/Fonts/WhiteHeader.css';

function WhiteHeader({children}) {
  return (
    <div className="white-header-container">
      <div className='white-header-content'>
          {children}
      </div>
    </div>
  );
}

export default WhiteHeader;
