import react from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aset from '../assets/aset1.jpg';



function Cont() {
    return (
        <div className="con-container">
            <div className="row" >
                <div className="contact-info col-lg-6">
                    <div className="address">
                        <h2><FontAwesomeIcon icon={faMapMarkerAlt} /> ADDRESS</h2>                             <p>Ameeeni Sultania Educational Trust</p>
                        <p>Charity number: 1142194</p>
                        <p>452 Tyburn Road</p>
                        <p>Birmingham</p>
                        <p>B24 8EE</p>
                    </div>
                    <div className="social-media">
                        <h2>Connect with Us</h2>
                        <div className="social-icons">
                            <a href="https:www.facebook.com/ameeniasultania" className="con-btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https:www.instagram.com/ameeniasultania/" className="con-btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} size="2x" />
                            </a>
                            <a href="https:api.whatsapp.com/send?phone=447458407716&text=Salam" className="con-btn btn-primary me-2" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contact-form col-lg-6">
                    <h2>Contact Us</h2>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" className="form-btn btn-primary">Send Message</button>
                    </form>
                </div>
            </div >

            <div className="con-map col-lg-12">

                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38852.96592279052!2d-1.836681!3d52.509722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bb28e1c10c01%3A0x49adb9d28408f9e4!2sAmeenia%20Sultania%20Educational%20Trust!5e0!3m2!1sen!2suk!4v1715261334976!5m2!1sen!2suk"
                    className='map-frame'
                    width="100%"
                    height="500"
                    style={{ border: '0' }}
                    allowfullscreen=""
                    padding="20px"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Ameenia Sultania Educational Trust">
                </iframe>
            </div>
        </div >

    )
}

export default Cont
