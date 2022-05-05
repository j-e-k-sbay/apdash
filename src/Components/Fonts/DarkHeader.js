import React from 'react';
import '../../Styles/Fonts/DarkHeader.css';

function DarkHeader({children}) {
  return (
    <div className="dark-header-container">
      <div className='dark-header-content'>
          {children}
      </div>
    </div>
  );
}

export default DarkHeader;
