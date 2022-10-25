import React from 'react';
import './pop-up.css';
import {useAppSelector} from "../../hooks/redux";

const PopUp = ({children}: any) => {

    const {showSuccessOrderPopUp} = useAppSelector(state => state.view)

    return (
        <div className={showSuccessOrderPopUp ? 'popUp-wrapper active' : 'popUp-wrapper'}>
            <div className={showSuccessOrderPopUp ? 'popUp-wrapper-content active' : 'popUp-wrapper-content'}>
                {children}
            </div>
        </div>
    )

}

export default PopUp;
