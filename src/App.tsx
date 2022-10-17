import React from 'react';
import './App.css'
import Router from "./component/Router";
import Navbar from "./component/navbar/Navbar";
import {useLoadDishes} from "./hooks/react";
import {Preloader} from "./assets/preloader/Preloader";

const App = () => {
    const {isLoading} = useLoadDishes('');

    return (
        <div className='wrapper'>
            {isLoading?
                <Preloader/>
            :
            <>
                <Navbar/>
                <Router/>
            </>
            }
        </div>
    );
};

export default App;