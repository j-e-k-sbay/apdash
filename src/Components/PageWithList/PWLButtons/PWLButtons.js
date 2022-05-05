import React from 'react';
import '../../../Styles/PageWithList/PWLButtons.css';


function PWLButtons({children,isFilled}) {

  return (
    <div className="pwl-buttons-container">
        {children}
    </div>
  );
}

export default PWLButtons;
