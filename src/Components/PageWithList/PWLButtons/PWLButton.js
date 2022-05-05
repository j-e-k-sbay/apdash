import React from 'react';
import '../../../Styles/PageWithList/PWLButtons.css';


function PWLButton({children,isFilled}) {

  return (
    <div className="pwl-btn-container">
        <button className={isFilled ? "pwl-btn filled" : "pwl-btn empty"}>
            {children}
        </button>
    </div>
  );
}

export default PWLButton;
