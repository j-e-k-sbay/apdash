import React from 'react';
import '../../Styles/Fonts/DarkTitle.css';

function DarkTitle({children, right}) {
  return (
    <div className="dark-title-container">
      <div className={right ? 'dark-title-content dt-right' : 'dark-title-content'}>
          {children}
      </div>
    </div>
  );
}

export default DarkTitle;
