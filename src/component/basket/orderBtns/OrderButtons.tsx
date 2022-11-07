import React from 'react';
import './orderBtns.css'
import {useAppDispatch} from "../../../hooks/redux";
import {clearBasket} from "../../../store/basketSlice";
import {setOrderStep} from "../../../store/viewSlice";

const OrderButtons = () => {
    const dispatch = useAppDispatch();

    
    return (
        <div className='btns-style'>
            <button className='firstBtn' onClick={()=>dispatch(setOrderStep(true))}>Order</button>
            <button onClick={()=>dispatch(clearBasket())} className='secondBtn'>Cancel order</button>
        </div>
    );
};

export default OrderButtons;