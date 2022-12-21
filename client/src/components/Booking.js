import React, { useState } from 'react';
import './Booking.css';

function Booking() {

    return (
        <div className="booking">
            {localStorage.getItem('activeSession')} <p>Booking</p>
            <div className='packages'>
                <h6>1H, 40e</h6>
                <h6>5H, 160e</h6>
                <h6>10H, 280e</h6>
            </div>
        </div>
    )
}

export default Booking