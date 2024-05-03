import React from 'react';
import Eventimg from '../assets/asetevent.jpg';

function Eventinfo() {
    return (
        <div className="eventinfo">

            <div className='eventimg' >
                <img src={Eventimg} alt="event" />
            </div>

            <div className="event col-lg-12">
                <h1>COMING SOON</h1>
            </div>
        </div>


    );
}

export default Eventinfo