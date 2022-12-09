import React from 'react';
import './Booking.css';
import BasicDateTimePicker from './TimePicker';

function Booking() {
    return (
        <div className="booking">
            {localStorage.getItem('activeSession')} Booking
            
        </div>
    )
}

export default Booking