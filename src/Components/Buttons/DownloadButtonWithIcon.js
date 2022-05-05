import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../Styles/Buttons/DownloadButtonWithIcon.css"

function DownloadButtonWithIcon({icon,text}){
    return(
        <div className="dbwi-container">
            <button className="dbwi-content">
                <div className="dbwi-icon">
                    <FontAwesomeIcon icon={icon}/>
                </div>
                <div className="dbwi-textside">
                    <div className="dbwi-download">
                        Download from
                    </div>
                    <div className="dbwi-text">
                        {text}
                    </div>
                </div>
            </button>
        </div>
    );
}

export default DownloadButtonWithIcon;