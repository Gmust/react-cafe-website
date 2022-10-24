import React from 'react';
import {BsFillTrashFill} from 'react-icons/bs';
import './basketItem.css';
import {useAppDispatch} from "../../../hooks/redux";
import {deleteItemFromBasket} from "../../../store/basketSlice";
import AmountChanger from "../../menu/dishCard/amount/AmountChanger";

type TBasketItemsProps = {
    name: string,
    price: number,
    img: string,
    id: number,
    dishesAmount: number
}

const BasketItem = ({id, name, img, price,dishesAmount}: TBasketItemsProps) => {

    const dispatch = useAppDispatch();
    return (
        <div className='basketItem-wrapper'>
            <h3>{name}</h3>
            <img src={img} alt=''/>
            <span>{price}$ X {dishesAmount}</span>
            <button>
                <BsFillTrashFill onClick={() => dispatch(deleteItemFromBasket(id))}
                                 style={{'color': 'red', marginLeft: 20}}/>
            </button>

            <div className='amountChange-style'>
                <AmountChanger id={id}/>
            </div>
        </div>

    );
};

export default BasketItem;