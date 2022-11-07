import React, {useEffect, useState} from 'react';
import './orderStep.css';
import {useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {formatPhoneNumber} from "../../../utils/mask/formatPhoneNumber";
import {setIsBasketOpen, setOrderStep, setShowSuccessOrderPopUp} from "../../../store/viewSlice";
import {useSendOrderMutation} from "../../../services/basketApi";
import {clearBasket} from "../../../store/basketSlice";

type TTelephoneField = {
    telephone: string
}


const OrderStep = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<TTelephoneField>({mode: 'onChange'});
    const {basketItems, order, totalPrice} = useAppSelector(state => state.basket);
    const {isBasketOpen, showSuccessOrderPopUp} = useAppSelector(state => state.view);
    const [sendOrder, {isError, isSuccess, isLoading}] = useSendOrderMutation();
    const dispatch = useAppDispatch()
    const [inputValue, setInputValue] = useState<string>();
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setInputValue(formattedPhoneNumber);
    }

    useEffect(() => {
        if (isSuccess) {
            dispatch(setIsBasketOpen(!isBasketOpen))
            dispatch(setShowSuccessOrderPopUp(true))
            dispatch(setOrderStep(false))
            dispatch(clearBasket())
            setTimeout(() => {
                dispatch(setShowSuccessOrderPopUp(false))
            }, 3000)
        }
    }, [order, isSuccess])

    const confirmOrder = ({telephone}: TTelephoneField) => {
        const params = {
            telephone,
            price: totalPrice,
            order: basketItems
        }
        sendOrder(params)
    }


    return (
        <form onSubmit={handleSubmit(confirmOrder)}>

            <div className='confirmOrder'>
                <label>Phone: </label>
                <input type="tel" placeholder='000-000-0000'
                       {...register('telephone', {
                           required: true,
                           pattern: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
                       })}
                       className="telephoneInput-style"
                       inputMode='tel'
                       onChange={e => handleInput(e)}
                       value={inputValue || ''}
                />
                {errors.telephone?.type === 'required' && <p className='error-style'>Telephone number is required</p>}
                {errors.telephone?.type === 'pattern' && <p className='error-style'>Incorrect number</p>}
            </div>

            <div className='order-btn'>
                <input type='submit' className='sendOrder-btn' value='Confirm order!'/>
                <button onClick={() => dispatch(setOrderStep(false))}>Go back</button>
            </div>
            {isLoading ? <div className='form-preloader-wrapper'></div> : ''}
        </form>
    );
};

export default OrderStep;