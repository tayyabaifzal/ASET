import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

    return (


        <div className="footer-container">
            <div className="row">
                <div className="footer col-sm-6 col-md-4 col-lg-6">
                    <div className='contact'>
                        <h1>ADDRESS</h1>
                        <p>
                            452 Tyburn Road
                        </p>
                        <p>Birmingham </p>
                        <p>B24 8EE</p>
                    </div>
                </div>
            </div>


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
            </div>


            <div className="table-container col-sm-6 col-md-4 col-lg-6">
                <h1>OPENING HOURS</h1>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Mon - Fri:</td>
                            <td>8am - 9pm</td>
                        </tr>
                        <tr>
                            <td>Sat - Sun:</td>
                            <td>8am - 1am</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='map col-sm-6 col-md-4 col-lg-6'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.241436495451!2d-1.8366811!3d52.5097222!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb28e1c10c01%3A0x49adb9d28408f9e4!2sAmeenia%20Sultania%20Educational%20Trust!5e0!3m2!1sen!2suk!4v1714514329937!5m2!1sen!2suk"
                    width="500"
                    height="300"
                    style={{ border: '0' }} 
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
            {/* 
            <div className="text-center colsm-12 col-md-12 col-lg-12">
                <a className="text-dark" href="https://mdbootstrap.com/">© 2020 Copyright:MDBootstrap.com</a>
            </div> */}
        </div>

    )

}
