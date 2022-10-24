import React from 'react';
import './orderBtns.css'
import {useAppDispatch} from "../../../hooks/redux";
import {clearBasket} from "../../../store/basketSlice";

const OrderButtons = () => {
    const dispatch = useAppDispatch();

    return (
        <div className='btns-style'>
            <button className='firstBtn'>Order</button>
            <button onClick={()=>dispatch(clearBasket())} className='secondBtn'>Cancel order</button>
        </div>
    );
};

export default OrderButtons;