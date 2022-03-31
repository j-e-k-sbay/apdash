import React from 'react';
import '../../Styles/AttributesTiles/AttributesTiles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SingleAttributesTile({icon,header,text}) {
  return (
    <div className="single-at-container">
      <div className='single-at-icon'>
          <FontAwesomeIcon icon={icon}/>
      </div>
      <div className='single-at-header'>
            {header}
      </div>
      <div className='single-at-text'>
            {text}
      </div>
    </div>
  );
}

export default SingleAttributesTile;
