import React, {useEffect} from 'react';
import './bookingConfirm.css'
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {
    setIsBasketOpen, setOrderStep,
    setShowBookingConfirm,
    setShowSuccessBookingPopUp,
    setShowSuccessOrderPopUp
} from "../../../store/viewSlice";
import {useSendBookingOrderMutation} from "../../../services/bookingApi";
import {clearBasket} from "../../../store/basketSlice";

const BookingConfirm = () => {

    const dispatch = useAppDispatch();
    const {showBookingConfirm} = useAppSelector(state => state.view);
    const {booking, time} = useAppSelector(state => state.booking);
    const [sendBookingOrder, {isError, isLoading, isSuccess}] = useSendBookingOrderMutation()
    let viewTime
    if (time != null) {
        // @ts-ignore
        viewTime = time.toString().slice(0, 21)
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(setShowBookingConfirm(false))
            dispatch(setShowSuccessBookingPopUp(true))
            setTimeout(() => {
                dispatch(setShowSuccessBookingPopUp(false))
            }, 3000)
        }

    }, [isSuccess])


    return (
        <div className={showBookingConfirm ? 'booking-popUp__wrapper active' : 'booking-popUp__wrapper'}
             onClick={() => dispatch(setShowBookingConfirm(false))}>
            <div className={showBookingConfirm ? 'booking-content__wrapper active' : 'booking-content__wrapper'}
                 onClick={(e) => e.stopPropagation()}>
                <div>
                    <h3> Is that correct info?</h3>
                    <ul className='booking-info'>
                        <li>Full name: {booking.fullName}</li>
                        <li>{booking.email ? `Email: ${booking.email}` : `Telephone: ${booking.phoneNumber}`}</li>
                        <li>Amount of visitors: {booking.amountOfPersons}</li>
                        <li>Time: {viewTime ? viewTime : ''}</li>
                    </ul>
                </div>

                <div className='confirm-buttons'>
                    <button onClick={() => sendBookingOrder({time, booking})} className='yes-btn'>Yes</button>
                    <button onClick={() => dispatch(setShowBookingConfirm(false))} className='change-btn'>Change
                    </button>
                    {isError && <div className='error-style'>Some error occurred, try again later</div>}
                    {isLoading ? <div className='form-preloader-wrapper'></div> : ''}
                </div>
            </div>
        </div>
    );
};

export default BookingConfirm;