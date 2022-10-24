import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";
import './amountChanger.css'
import {useAppDispatch, useAppSelector} from "../../../../hooks/redux";
import {decrease, increase} from "../../../../store/basketSlice";

const AmountChanger = ({id}:any) => {
    const dispatch = useAppDispatch();
    return (
        <span className='amountChange-wrapper'>
            <div>
                <AiOutlineMinus onClick={()=> dispatch(decrease(id))}/>
            </div>

            <div>
                <AiOutlinePlus onClick={()=> dispatch(increase(id))}/>
            </div>
        </span>
    );
};

export default AmountChanger;