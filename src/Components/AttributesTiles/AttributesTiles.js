import React from 'react';
import '../../Styles/AttributesTiles/AttributesTiles.css';
import SingleAttributesTile from './SingleAttributesTile';
import { faBellConcierge } from '@fortawesome/free-solid-svg-icons'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons'

function AttributesTiles() {
  return (
    <div className="at-container">
      <div className='at-content'>
          <SingleAttributesTile
            icon={faBellConcierge}
            header={"Modular"}
            text={"All components are built to be used in combination."}
            />
            <SingleAttributesTile
            icon={faWindowRestore}
            header={"Responsive"}
            text={"Quick is optimized to work for most devices."}
            />
            <SingleAttributesTile
            icon={faRotate}
            header={"Scalable"}
            text={"Remain consistent while developing new features."}
            />
            <SingleAttributesTile
            icon={faBezierCurve}
            header={"Customizable"}
            text={"Change a few variables and the whole theme adapts."}
            />
      </div>
    </div>
  );
}

export default AttributesTiles;
