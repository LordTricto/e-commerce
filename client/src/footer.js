import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faCopyright} from '@fortawesome/free-regular-svg-icons';


function Footerrr() {
    return ( 

        <div className="">
            <div className="footerr">
                <footer>
                    <div className="bottom-line"></div>
                    <div className="bottom">
                        <div className="socials">
                            <ul>
                                <li><FontAwesomeIcon icon={faInstagram} /></li>    
                                <li><FontAwesomeIcon icon={faFacebookF} /></li>    
                                <li><FontAwesomeIcon icon={faWhatsapp} /></li>    
                            </ul>
                        </div>
                        <div className="rights">
                            <FontAwesomeIcon icon={faCopyright} /> 2020, ConfidenceWulbi Stores.
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footerrr;