import React from 'react';
import '../../Styles/Fonts/DarkTitle.css';

function DarkTitle({children}) {
  return (
    <div className="dark-title-container">
      <div className='dark-title-content'>
          {children}
      </div>
    </div>
  );
}

export default DarkTitle;
