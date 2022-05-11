import React from "react";
import "../../../Styles/Sections/OurWorkProcess/OWPElement.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function OWPIcon({icon}){
    return(
        <div className="owp-icon-container">
            <div className="owp-icon">
                <FontAwesomeIcon icon={icon}/>
            </div>
        </div>
    );
}

export default OWPIcon;