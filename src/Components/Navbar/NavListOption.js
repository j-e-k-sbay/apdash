import '../../Styles/Navbar/NavListOption.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavListOption({label,icon}) {
    return (
        <div className="nav-option-container">
            <div className='nav-label'>
                {label}
            </div>
            {icon !== "" ?
            <div className='nav-icon'>
                <FontAwesomeIcon icon={icon}/>
            </div>:<></>}
            
        </div>
    );
}

export default NavListOption;
