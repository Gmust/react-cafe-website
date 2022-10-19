import React from 'react';
import './startPage.css'
import {BsFillGeoAltFill,BsTelephone,BsClock} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/redux";
import {setIsMain} from "../../store/viewSlice";
import { motion } from "framer-motion"
import {MAP_LINK} from "../../utils/consts";


const StartPage = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleExploreBtn =()=>{
        navigate('/main');
        dispatch(setIsMain(true));
    }

    const handleFindButton =()=>{

    }

    return (
        <div className='start-wrapper' >
            <motion.div   initial={{ x: "100%" }}
                          animate={{ x: "calc(15vw - 50%)" }}
                             className='main-part'>
                <div>
                    <p>Your <b>FAVORITE FOOD</b></p>
                    <p>Always <b>TASTY AND FRESH</b></p>
                </div>

                <div  >
                    <motion.button onClick={handleExploreBtn}
                        whileHover={{scale:1.1}} transition={{delay:0.05}} whileTap={{scale:0.9}}>
                        Explore the range</motion.button>
                </div>

                <div className='additional-part'>
                    <div>
                        <BsClock/>
                        <p>Working hours: </p>
                        <p> 9:00 to 19:00  </p>
                    </div>

                    <div>
                        <BsFillGeoAltFill cursor='pointer'/>
                        <p>Kościelna 17, Poznań</p>
                        <a href={MAP_LINK} style={{cursor:'pointer'}} rel="noreferrer noopener" target="_blank">
                            <p>Find us here</p></a>
                    </div>v

                    <div>
                        <BsTelephone/>
                        <p>505-500-505</p>
                        <p>Call online</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default StartPage;