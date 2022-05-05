import React from 'react';
import '../../Styles/PageWithList/PWLTextSide.css';

function PWLParagraph({children}) {
  return (
    <div className="pwl-textside">
      <div className='pwl-paragraph'>
          {children}
      </div>
    </div>
  );
}

export default PWLParagraph;
