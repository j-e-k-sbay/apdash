import React from 'react';
import '../../Styles/PageWithList/PWLTextSide.css';

function PWLHeader({children}) {
  return (
    <div className="pwl-textside">
      <div className='pwl-header'>
          {children}
      </div>
    </div>
  );
}

export default PWLHeader;
