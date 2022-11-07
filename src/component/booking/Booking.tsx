import React from 'react';
import './booking.css'
import Calendar from "./calendar/Calendar";
import BookingForm from "./bookingForm/BookingForm";


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