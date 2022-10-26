import React, {useEffect} from 'react';
import './App.css'
import Router from "./component/Router";
import Navbar from "./component/navbar/Navbar";
import {useLoadDishes} from "./hooks/react";
import {Preloader} from "./assets/preloader/Preloader";
import Basket from "./component/basket/Basket";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {calculateTotalPrice} from "./store/basketSlice";
import PopUp from "./assets/pop-up/PopUp";
import {setShowSuccessOrderPopUp} from "./store/viewSlice";

const App = () => {
    const {isLoading} = useLoadDishes('')
    const {basketItems} = useAppSelector(state => state.basket)
    const {showSuccessOrderPopUp} = useAppSelector(state => state.view)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(calculateTotalPrice())
    }, [basketItems])

    return (
        <div className='wrapper'>
            {showSuccessOrderPopUp ? <PopUp>Order successfully sent! We will call you soon!</PopUp> : ''}
            {isLoading ?
                <Preloader/>
                :
                <>
                    <Navbar/>
                    <Router/>
                    <Basket/>
                </>
            }
        </div>
    );
};

export default App;