import React from 'react';
import Image from '../assets/img.jpg';

export default function About() {
    return (
        <div className="card-container">
            <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                    <div className="card h-100 w-70 ">
                        <img src={Image} className="card-img-top" alt="Card" />
                        <div className="card-body ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 w-70 ">
                        <img src={Image} className="card-img-top" alt="Card" />
                        <div className="card-body ">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100 w-70">
                        <img src={Image} className="card-img-top" alt="Card" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}