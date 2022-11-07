import React, {useEffect} from 'react';
import './bookingForm.css';
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {setContactWay, setShowBookingConfirm} from "../../../store/viewSlice";
import {setBooking} from "../../../store/bookingSlice";
import BookingConfirm from "../bookingConfirm/BookingConfirm";

type TBookingInputs = {
    phoneNumber: string,
    email: string
    amountOfPersons: number,
    fullName: string
}


const BookingForm = () => {

    const {register, handleSubmit, reset, formState: {isValid, errors}} = useForm<TBookingInputs>({mode: "onChange"})
    const {emailOrTel, isDateEmpty, showSuccessOrderPopUp} = useAppSelector(state => state.view)
    const dispatch = useAppDispatch();
    const onSubmit = (data: TBookingInputs) => {
        dispatch(setBooking(data))

    }

    useEffect(() => {
        if (showSuccessOrderPopUp) {
            reset();
        }
    }, [showSuccessOrderPopUp])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='forms-wrapper'>
                <h1>Please fill in contact details</h1>

                <div>
                    {
                        emailOrTel === 'tel'
                            ?
                            <>
                                <label>Telephone:</label>
                                <input type={'tel'}
                                       {...register('phoneNumber', {
                                           required: true,
                                           pattern: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
                                       })}
                                />
                                {errors.phoneNumber?.type === 'required' &&
                                    <div style={{fontSize: 20}} className='error-style'>This field is required</div>}
                                {errors.phoneNumber?.type === 'pattern' &&
                                    <div style={{fontSize: 20}} className='error-style'>Enter correct telephone
                                        please</div>}
                            </>
                            :
                            <>
                                <label>Email:</label>
                                <input type={'email'}
                                       {...register('email', {
                                           required: true,
                                           pattern: /^\S+@\S+\.\S+$/
                                       })}
                                />
                                {errors.email?.type === 'required' &&
                                    <div style={{fontSize: 20}} className='error-style'>This field is required</div>}
                                {errors.email?.type === 'pattern' &&
                                    <div style={{fontSize: 20}} className='error-style'>Enter correct email
                                        please</div>}
                            </>
                    }
                </div>
                <span className='radio-style'>
                <input name='contact' value='tel' type='radio' onClick={() => dispatch(setContactWay('tel'))}
                       defaultChecked/>
                <label>Telephone</label>
                <input name='contact' value='email' type='radio' onClick={() => dispatch(setContactWay('email'))}/>
                <label>Email</label>
            </span>

                <div>
                    <label>Full name:</label>
                    <input type='text' {...register('fullName', {
                        required: true,
                        pattern: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
                    })}/>
                    {errors.fullName?.type === 'required' &&
                        <div style={{fontSize: 20}} className='error-style'>This field is required</div>}
                    {errors.fullName?.type === 'pattern' &&
                        <div style={{fontSize: 20}} className='error-style'>Enter correct full name please</div>}
                </div>

                <div className='amount-style'>
                    <label>Choose amount of persons:</label>
                    <span>
                    <input type='range' min='1' max='6' step='1' list='tickmarks' {...register('amountOfPersons')}/>
                    <datalist className='dataList-style' id="tickmarks">
                        <option value="1" label="1"></option>
                        <option value="2" label="2"></option>
                        <option value="3" label="3"></option>
                        <option value="4" label="4"></option>
                        <option value="5" label="5"></option>
                        <option value="5" label="6"></option>
                    </datalist>
                </span>
                </div>

                <input disabled={isDateEmpty != false && isValid ? false : true}
                       className={isDateEmpty === true && isValid ? 'submit-btn' : 'submit-btn disabled'}
                       type='submit' value='Submit' onClick={() => dispatch(setShowBookingConfirm(true))}/>
            </form>
        </>

    )
        ;
};

export default BookingForm;




