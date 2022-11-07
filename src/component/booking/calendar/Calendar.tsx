import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setTime} from "../../../store/bookingSlice";
import "react-datepicker/dist/react-datepicker.css"
import './calendar.css'
import {setDateIsEmpty} from "../../../store/viewSlice";


const Calendar = () => {


    const includeTime = [
        setHours(setMinutes(new Date(), 0), 9),
        setHours(setMinutes(new Date(), 0), 10),
        setHours(setMinutes(new Date(), 0), 11),
        setHours(setMinutes(new Date(), 0), 12),
        setHours(setMinutes(new Date(), 0), 13),
        setHours(setMinutes(new Date(), 0), 14),
        setHours(setMinutes(new Date(), 0), 15),
        setHours(setMinutes(new Date(), 0), 16),
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 0), 18),
        setHours(setMinutes(new Date(), 0), 19),
    ]

    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7)
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dispatch = useAppDispatch();
    const {isDateEmpty} = useAppSelector(state => state.view)
    const {time} = useAppSelector(state => state.booking)
    const [startDate, setStartDate] = useState<Date | null>(
        setHours(setMinutes(new Date(), 30), 16)
    );


    useEffect(() => {
        if (time != null) {
            dispatch(setDateIsEmpty(true))
        } else {
            dispatch(setDateIsEmpty(false))
        }

    }, [startDate, isDateEmpty])


    return (
        <div>
            <h2>Select date and time please</h2>
            <DatePicker
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date)
                    dispatch(setTime(date))

                    //   dispatch(setTime(date?.toLocaleTimeString()));
                    // dispatch(setDate(date?.toDateString()));
                }}
                showTimeSelect
                inline
                timeFormat="HH:mm"
                timeIntervals={60}
                minDate={tomorrow}
                maxDate={maxDate}
                timeCaption={'Visit time'}
                includeTimes={includeTime}
                dateFormat="MMMM d, yyyy h:mm aa"
            />

            {isDateEmpty === false? <div  className='error-style'>You have not selected a date</div> : ''}

        </div>
    );
};

export default Calendar;