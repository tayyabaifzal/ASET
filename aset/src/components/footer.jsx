import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {

    return (

        <div id="contact" className="mt-3">
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
        </div>
    );
}
