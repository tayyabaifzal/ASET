import React, { useEffect } from 'react';
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import c5 from "../assets/c5.png";
import c6 from "../assets/c6.png";
import c7 from "../assets/c7.png";
import c8 from "../assets/c8.png";
import leftImage from "../assets/asetmos.jpeg";
import rightImage from "../assets/asetmos.jpeg";

function Donate() {
    useEffect(() => {
        // Import jQuery
        const jqueryScript = document.createElement('script');
        jqueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        jqueryScript.integrity = 'sha384-KyZXEAg3QhqLMpG8r+Knujsl5+Mhx4ZwYC2swt/8UEs5r+o4HQwO8j7Bh/INytc+'; // Integrity hash for script
        jqueryScript.crossOrigin = 'anonymous';
        document.body.appendChild(jqueryScript);

        // Import Bootstrap JavaScript after jQuery
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js';
        bootstrapScript.integrity = 'sha384-pzjw8f+7daxF1g4+OU3mG+XsJ73EKtkIAsP/zsB+29Ga/nJQ+0k1G5I2h5JaT7Z'; // Integrity hash for script
        bootstrapScript.crossOrigin = 'anonymous';
        document.body.appendChild(bootstrapScript);

        return () => {
            // Cleanup
            document.body.removeChild(jqueryScript);
            document.body.removeChild(bootstrapScript);
        };
    }, []);

    return (
        <div>
            
            <div className="car-container col-sm-6 col-md-4 col-lg-6" style={{ height: '100vh', width: '100%' }}>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={c1} className="car w-50" alt="Slide 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={c2} className="car w-50" alt="Slide 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={c3} className="car w-50" alt="Slide 3" />
                        </div>
                        <div className="carousel-item">
                            <img src={c4} className="car w-50" alt="Slide 4" />
                        </div>
                        <div className="carousel-item">
                            <img src={c5} className="car w-50" alt="Slide 5" />
                        </div>
                        <div className="carousel-item">
                            <img src={c6} className="car w-50" alt="Slide 6" />
                        </div>
                        <div className="carousel-item">
                            <img src={c7} className="car w-50" alt="Slide 7" />
                        </div>
                        <div className="carousel-item">
                            <img src={c8} className="car w-50" alt="Slide 8" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="info-row">
                <div className="image-info col-md-6">
                    <img src={leftImage} alt="Left Image" className="left-image" />
                </div>
                <div className="image-info col-md-6">
                    <img src={rightImage} alt="Right Image" className="right-image" />
                </div>
            </div>

        </div>
    )
}

export default Donate;
