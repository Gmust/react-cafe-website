import React, {useEffect} from 'react';
import './App.css'
import Router from "./component/Router";
import Navbar from "./component/navbar/Navbar";
import {useLoadDishes} from "./hooks/react";
import {Preloader} from "./assets/preloader/Preloader";
import Basket from "./component/basket/Basket";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {calculateTotalPrice} from "./store/basketSlice";

const App = () => {
    const {isLoading} = useLoadDishes('')
    const {basketItems} = useAppSelector(state => state.basket)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(calculateTotalPrice())
    }, [basketItems])

    return (
        <div className='wrapper'>
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