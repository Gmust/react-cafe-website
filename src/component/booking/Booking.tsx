import React from 'react';
import Calendar from "./calendar/Calendar";
import BookingForm from "./bookingForm/BookingForm";
import './booking.css';

const Booking = () => {


    return (
        <div className='booking-wrapper'>

            <div className='calendar'>
                <Calendar/>
            </div>

            <div className='forms'>
                <BookingForm/>
            </div>

        </div>
    );
};

export default Booking;