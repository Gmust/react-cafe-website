import React from 'react';
import './mainPage.css';
import Slider from "./slider/Slider";
import {motion} from "framer-motion";
import {Preloader} from "../../assets/preloader/Preloader";
import {useLoadDishes} from "../../hooks/loadDishes";
import VisitorsList from "./visitors/VisitorsList";

const MainPage = () => {


 const {isLoading} =   useLoadDishes('');

    return (<>
            {isLoading ?
                <Preloader/>
                :
                <motion.div initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            className='main-page-wrapper'>
                    <h1>Dish of the day</h1>
                    <motion.div initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}} className='slider'>
                        <Slider/>
                    </motion.div>

                    <div className='visitors'>
                        <h2>Popular persons visited us</h2>
                        <VisitorsList/>
                    </div>

                </motion.div>
            }
        </>
    );
};

export default MainPage;