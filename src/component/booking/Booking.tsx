import React from 'react';
import './booking.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const Booking = () => {



    return (
        <div className='booking-wrapper'>

            <div className='calendar'>
                <DatePicker
                    showTimeSelect
                    dateFormat="Pp"
                    inline
                    onChange={()=>{}}
                />
            </div>

            <div className='forms'>
                forms
            </div>

        </div>
    );
};

export default Booking;