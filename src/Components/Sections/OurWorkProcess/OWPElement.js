import React from "react";
import "../../../Styles/Sections/OurWorkProcess/OWPElement.css"
import OWPIcon from "./OWPIcon";

function OWPElement({children,icon,right}){
    return(
        <div className="owp-element-container">
            {right ? 
                <>
                <div className="text-side owp-left">
                    {children}
                </div>
                <div className="icon-side">
                    <OWPIcon icon={icon} />
                </div>
                </>:
                <>
                <div className="icon-side">
                    <OWPIcon icon={icon} />
                </div>
                <div className="text-side owp-right">
                        {children}
                </div>
                </>
            }
            
        </div>
    );
}

export default OWPElement;