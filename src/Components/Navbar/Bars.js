import '../../Styles/Navbar/Bars.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Bars({onClickBars}) {

  return (
    <div className="bars-container">
          <div className='bars-icon'>
                <FontAwesomeIcon icon={faBars} onClick={onClickBars}/>
          </div>
    </div>
  );
}

export default Bars;
