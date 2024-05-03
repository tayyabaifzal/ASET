import react from 'react';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aset from '../assets/asetabt.jpeg';


function Cont() {
    return (
        <div className="social-container col-sm-6 col-md-4 col-lg-6">
            <h1>CONTACT</h1>
            <div className="text-center">
                <a href="https://www.facebook.com/ameeniasultania" className="con-btn btn-dark me-2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/ameeniasultania/" className="con-btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=447458307716&text=Salam" className="con-btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </a>
            </div>

            <div className='pic h-100 w-100' >
                <img src={aset} alt="pic" />
            </div>
        </div>
    )
}

export default Cont
