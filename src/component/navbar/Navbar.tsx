import React from 'react';
import './navbar.css'
import logo from '../../assets/img/logo.svg'
import {BsFillBasketFill} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setIsBasketOpen} from "../../store/viewSlice";

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isBasketOpen} = useAppSelector(state => state.view)
    const {amount} = useAppSelector(state => state.basket)

    return (
        <div className='navbar-wrapper'>

            <div className='logo'>
                <img src={logo} onClick={() => navigate('/main')} alt="Logo"/>
            </div>


            <ul className='navbar'>
                <span className='burger-menu'></span>
                <li><Link to='/info' className='navbar-link'>About us</Link></li>
                <li><Link to='/menu' className='navbar-link'>Menu</Link></li>
                <li><Link to='/contacts' className='navbar-link'>Contacts</Link></li>
                <li><Link to='/booking' className='navbar-link'>Booking</Link></li>
            </ul>

            <div className='basket'>
                <BsFillBasketFill size={30} color='green' onClick={() => dispatch(setIsBasketOpen(!isBasketOpen))}/>
                <span><b className='totalCount-style'>{amount}</b></span>
            </div>

        </div>
    );
};

export default Navbar;