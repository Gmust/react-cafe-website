import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import './basket.css';
import {setIsBasketOpen} from "../../store/viewSlice";
import {IDishes} from "../../models/dishes.models";
import BasketItem from "./basketItem/BasketItem";
import OrderButtons from "./orderBtns/OrderButtons";
import {calculateTotalPrice} from "../../store/basketSlice";
import {AiOutlineCloseCircle} from "react-icons/ai";
import OrderStep from "./orderStep/OrderStep";


const Basket = () => {

    const dispatch = useAppDispatch();
    const {isBasketOpen, orderStep} = useAppSelector(state => state.view);
    const {basketItems, totalPrice, amount} = useAppSelector(state => state.basket);
    useEffect(() => {
        dispatch(calculateTotalPrice());
    }, [totalPrice, amount])

    return (
        <div className={isBasketOpen ? "basket-wrapper active" : "basket-wrapper"}
             onClick={() => dispatch(setIsBasketOpen(false))}>
            <div className={isBasketOpen ? "basket-wrapper-content active" : "basket-wrapper-content"}
                 onClick={(e) => e.stopPropagation()}>
                {orderStep ? <OrderStep/>
                    :
                    basketItems.length !== 0 ?
                        <>
                            <div className='closeBtn'><AiOutlineCloseCircle
                                onClick={() => dispatch(setIsBasketOpen(false))}/></div>

                            <div className='items'>
                                {basketItems.map((basketItem: IDishes) =>
                                    <BasketItem key={basketItem.id} id={basketItem.id}
                                                name={basketItem.dish.name} price={basketItem.dish.price}
                                                img={basketItem.dish.img} dishesAmount={basketItem.dishesAmount}/>
                                )}


                            </div>

                            <div className='order-btns'>
                                <OrderButtons/>
                                <br/>
                                <div className='totalPrice'>Total price: {totalPrice}$</div>
                            </div>
                        </>
                        :
                        <div style={{color: 'black'}}>Basket is empty :( , order something ^_^</div>
                }
            </div>

        </div>
    );
};

export default Basket;