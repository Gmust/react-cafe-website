import React from 'react';
import './navbar.css'
import logo from '../../assets/img/logo.svg'
import {BsFillBasketFill} from "react-icons/bs";
import {Link, useNavigate} from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();


    return (
        <div className='navbar-wrapper'>

            <div className='logo'>
                <img src={logo} onClick={() => navigate('/main')} alt="Logo"/>
            </div>


            <ul className='navbar'>
                <span  className='burger-menu'></span>
                <li><Link to='/info' className='navbar-link'>About us</Link></li>
                <li><Link to='/menu' className='navbar-link'>Menu</Link></li>
                <li><Link to='/contacts' className='navbar-link'>Contacts</Link></li>
                <li><Link to='/booking' className='navbar-link'>Booking</Link></li>
            </ul>

            <div className='basket'>
                <BsFillBasketFill size={30} color='green'/>
            </div>

        </div>
    );
};

export default Navbar;