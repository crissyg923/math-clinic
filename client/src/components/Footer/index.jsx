import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Footer () {

    return (
    <footer className="footer">
        <div className="container">
        <div className="content">
            <h5>
        <FontAwesomeIcon icon={ faCopyright } size="1x" /> 
        2024 Colbert
        </h5>
        </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;
  