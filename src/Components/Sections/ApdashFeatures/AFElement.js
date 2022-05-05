import "../../../Styles/Sections/ApdashFeatures/AFElement.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AFElement({icon,children}){
    return(
        <div className="af-element-container">
            <div className="af-element-icon">
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div className="af-element-text">
                {children}
            </div>
        </div>
    );
}

export default AFElement;