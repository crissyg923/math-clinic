import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import './index.css';

function Footer () {

    return (
    <footer className="footer">
        <h4 className="siteheader text-center">
        <FontAwesomeIcon icon={ faCopyright } size="1x" /> 2024 Colbert
        </h4>
    </footer>
    );
  }
  
  export default Footer;
  